<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\SuperAdminDashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ─── Public routes ─────────────────────────────────────
Route::get('/', fn () => Inertia::render('welcome'))->name('landingpage');

// ─── Auth-only routes (any logged-in user) ─────────────
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

// ─── Admin routes (admin + superadmin only) ────────────
Route::middleware(['auth', 'verified', 'role:admin,superadmin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])
            ->name('dashboard');
    });

// ─── Superadmin routes (superadmin only) ───────────────
Route::middleware(['auth', 'verified', 'role:superadmin'])
    ->prefix('superadmin')
    ->name('superadmin.')
    ->group(function () {
        Route::get('/dashboard', [SuperAdminDashboardController::class, 'index'])
            ->name('dashboard');
        Route::delete('/items/{item}', [SuperAdminDashboardController::class, 'deleteItem'])
            ->name('items.destroy');
        Route::post('/items/{id}/restore', [SuperAdminDashboardController::class, 'restoreItem'])
            ->name('items.restore');
    });

require __DIR__.'/settings.php';