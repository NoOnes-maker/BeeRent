<?php

namespace App\Actions\Fortify;

use App\Enums\UserRole;
use App\Models\User;
use App\Rules\Adult;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    public function create(array $input): User
    {
        Validator::make($input, [
            'first_name'  => ['required', 'string', 'max:60'],
            'middle_name' => ['nullable', 'string', 'max:60'],
            'last_name'   => ['required', 'string', 'max:60'],

            // 🔞 Birthdate must exist, be a valid past date, and be 18+.
            'birthdate'   => [
                'required',
                'date',
                'before:today',
                new Adult(18),
            ],

            'email'       => [
                'required', 'string', 'email', 'max:255',
                Rule::unique(User::class),
            ],
            'password'    => $this->passwordRules(),
        ], [
            // Optional: friendlier field names in error messages
            'birthdate.required' => 'We need your birthdate to verify you are 18 or older.',
        ])->validate();

        // Legacy full name for backward compatibility
        $fullName = trim(collect([
            $input['first_name'],
            $input['middle_name'] ?? null,
            $input['last_name'],
        ])->filter()->implode(' '));

        return User::create([
            'name'         => $fullName,
            'first_name'   => $input['first_name'],
            'middle_name'  => $input['middle_name'] ?? null,
            'last_name'    => $input['last_name'],
            'birthdate'    => $input['birthdate'],
            'email'        => $input['email'],
            'password'     => Hash::make($input['password']),
            'role'         => UserRole::USER, // 🔐 server-controlled
        ]);
    }
}