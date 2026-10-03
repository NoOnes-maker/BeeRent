<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

/**
 * Custom login logic that respects the 'login_as' role picker.
 */
class AuthenticateUser
{
    public function __invoke(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $chosenRole  = $request->input('login_as', 'user'); // 'user' | 'admin'

        $user = User::where('email', $credentials['email'])->first();

        // Password check (constant time via Hash::check)
        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => __('auth.failed'),
            ]);
        }

        // 🔐 Role gate — reject mismatched role pick
        if ($chosenRole === 'admin' && ! $user->isAdmin()) {
            throw ValidationException::withMessages([
                'email' => 'This account is not registered as an Admin. Please use the User login.',
            ]);
        }

        if ($chosenRole === 'user' && $user->isAdmin()) {
            throw ValidationException::withMessages([
                'email' => 'This is an Admin account. Please use the Admin login.',
            ]);
        }

        // Authenticate (login + regenerate session to prevent fixation)
        auth()->login($user, $request->boolean('remember'));
        $request->session()->regenerate();

        return $user;
    }
}