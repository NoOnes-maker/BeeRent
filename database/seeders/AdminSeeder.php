<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::firstOrNew(['email' => 'admin@beerent.test']);

        $admin->forceFill([
            'name' => 'BeeRent Admin',
            'password' => Hash::make('admin12345'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ])->save();
    }
}