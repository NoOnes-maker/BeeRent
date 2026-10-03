<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('dashboard', [
            'stats' => [
                'items_listed'    => $user->items()->count(),
                'active_rentals'  => $user->rentals()->where('status', 'active')->count(),
                'total_earnings'  => (float) $user->items()
                    ->join('rentals', 'items.id', '=', 'rentals.item_id')
                    ->where('rentals.status', 'returned')
                    ->sum('rentals.total_price'),
            ],
            'recentRentals' => $user->rentals()
                ->with('item:id,title,daily_rate')
                ->latest()
                ->take(5)
                ->get(),
            'recentItems' => $user->items()
                ->latest()
                ->take(5)
                ->get(['id', 'title', 'daily_rate', 'status', 'category']),
        ]);
    }
}