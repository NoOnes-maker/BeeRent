<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'description',
        'daily_rate',
        'deposit',
        'category',
        'status',
        'image_path',
    ];

    protected function casts(): array
    {
        return [
            'daily_rate' => 'decimal:2',
            'deposit'    => 'decimal:2',
        ];
    }

    /** The user who owns this item */
    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /** Rentals made against this item */
    public function rentals(): HasMany
    {
        return $this->hasMany(Rental::class);
    }
}