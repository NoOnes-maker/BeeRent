<?php

namespace App\Models;

use App\Enums\UserRole;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    protected $fillable = [
        'name', // kept for backward compatibility
        'first_name',
        'middle_name',
        'last_name',
        'birthdate',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password', 'remember_token', 'two_factor_secret',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at'       => 'datetime',
            'password'                => 'hashed',
            'role'                    => UserRole::class,
            'two_factor_confirmed_at' => 'datetime',
            'birthdate'               => 'date',
        ];
    }

    /* ─────────────────────────────────────────────
     |  ACCESSORS  (computed attributes)
     |─────────────────────────────────────────────*/

    /**
     * 'full_name' — read-only accessor.
     * Usage: $user->full_name  →  "Juan Dela Cruz"
     */
    protected function fullName(): Attribute
    {
        return Attribute::get(fn () => collect([
            $this->first_name,
            $this->middle_name,
            $this->last_name,
        ])->filter()->implode(' '));
    }

    /**
     * 'name' accessor — keeps every existing view/query working.
     * If first_name is set, use it; otherwise fall back to the raw name column.
     */
    protected function name(): Attribute
    {
        return Attribute::get(fn () =>
            $this->first_name
                ? trim("{$this->first_name} {$this->last_name}")
                : $this->attributes['name'] ?? ''
        );
    }

    /**
     * 'initials' — handy for avatars.
     * Usage: $user->initials  →  "JD"
     */
    protected function initials(): Attribute
    {
        return Attribute::get(fn () =>
            strtoupper(substr($this->first_name ?? '', 0, 1) .
                       substr($this->last_name ?? '', 0, 1))
        );
    }
    /* ─────────────────────────────────────────────
    |  AGE HELPERS
    |─────────────────────────────────────────────*/

    /**
    * 'age' accessor — computed every read.
    * Usage: $user->age  →  int|null
    */
    protected function age(): Attribute
    {
        return Attribute::get(fn () => $this->birthdate?->age);
    }

    /**
     * 'formatted_birthdate' — nice for UI.
     * Usage: $user->formatted_birthdate  →  "October 1, 2005"
     */
    protected function formattedBirthdate(): Attribute
    {
        return Attribute::get(fn () =>
            $this->birthdate?->format('F j, Y')
        );
    }

    /** Boolean — quick check anywhere in code */
    public function isAdult(int $minAge = 18): bool
    {
        return $this->birthdate && $this->birthdate->age >= $minAge;
    }

    /* ─────────────────────────────────────────────
     |  RELATIONSHIPS
     |─────────────────────────────────────────────*/

    public function items(): HasMany
    {
        return $this->hasMany(Item::class);
    }

    public function rentals(): HasMany
    {
        return $this->hasMany(Rental::class, 'renter_id');
    }

    /* ─────────────────────────────────────────────
     |  ROLE HELPERS
     |─────────────────────────────────────────────*/

    public function isAdmin(): bool
    {
        return in_array($this->role, [UserRole::ADMIN, UserRole::SUPERADMIN], true);
    }

    public function isSuperAdmin(): bool
    {
        return $this->role === UserRole::SUPERADMIN;
    }
}