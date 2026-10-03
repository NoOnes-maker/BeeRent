<?php

namespace App\Enums;

/**
 * User roles in BeeRent.
 */
enum UserRole: string
{
    case USER       = 'user';
    case ADMIN      = 'admin';
    case SUPERADMIN = 'superadmin';

    public function label(): string
    {
        return match ($this) {
            self::USER       => 'Renter',
            self::ADMIN      => 'Admin',
            self::SUPERADMIN => 'Super Admin',
        };
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}