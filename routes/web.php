<?php

use App\Http\Controllers\AdminLoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/landingpage', 'landingpage')->name('landingpage');
});

// Admin login page — MUST be outside the auth middleware group
Route::inertia('/admin/login', 'admin/login')->name('admin.login');
Route::post('/admin/login', [AdminLoginController::class, 'store']);

// Admin logout
Route::post('/admin/logout', function () {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();
    return redirect('/admin/login');
})->name('admin.logout');

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::inertia('/admin', 'admin/dashboard')->name('admin.dashboard');
});

require __DIR__.'/settings.php';