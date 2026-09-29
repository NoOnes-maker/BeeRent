<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/landingpage', 'landingpage')->name('landingpage');
});

require __DIR__.'/settings.php';
