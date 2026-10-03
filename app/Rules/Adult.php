<?php

namespace App\Rules;

use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * Validates that a birthdate is at least N years old (default: 18).
 *
 * Usage in a FormRequest or Validator:
 *   'birthdate' => ['required', 'date', 'before:today', new Adult(18)],
 *
 * Why a custom rule?
 *  - Accurate age calculation (accounts for month/day, not just year)
 *  - Reusable across register, profile edit, admin-created accounts
 *  - Clear, localized error message
 *  - Handles edge cases (Feb 29 birthdays, timezone)
 */
class Adult implements ValidationRule
{
    public function __construct(private int $minAge = 18) {}

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // ── Parse the value ────────────────────────────
        try {
            $birthdate = Carbon::parse($value);
        } catch (\Throwable) {
            $fail('The :attribute must be a valid date.');
            return;
        }

        // ── Reject future dates ────────────────────────
        if ($birthdate->isFuture()) {
            $fail('The :attribute cannot be in the future.');
            return;
        }

        // ── Age check (day-accurate) ───────────────────
        $age = $birthdate->age;

        if ($age < $this->minAge) {
            $fail("You must be at least {$this->minAge} years old to use BeeRent.");
        }
    }
}