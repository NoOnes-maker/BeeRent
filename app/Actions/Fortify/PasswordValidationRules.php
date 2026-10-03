<?php

namespace App\Actions\Fortify;

use Illuminate\Validation\Rules\Password;

/**
 * Reusable password validation rules.
 *
 * Follows OWASP recommendations:
 *  - Minimum 8 characters
 *  - Must contain letters AND numbers
 *  - Checks against a list of breached passwords (haveibeenpwned)
 *
 * Used by: CreateNewUser, UpdateUserPassword, ResetUserPassword
 */
trait PasswordValidationRules
{
    /**
     * The base password rules.
     *
     * @return array<int, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    protected function passwordRules(): array
    {
        return ['required', 'string', Password::default(), 'confirmed'];
    }

    /**
     * Rules for the current password (used on profile updates).
     */
    protected function currentPasswordRules(): array
    {
        return ['required', 'string', 'current_password'];
    }
}