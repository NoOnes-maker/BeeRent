<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Rental;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();

        return Inertia::render('admin/dashboard', [
            'stats' => [
                'my_items'          => $user->items()->count(),
                'my_active_listings' => $user->items()->where('status', 'available')->count(),
                'incoming_rentals'  => Rental::whereIn('item_id', $user->items()->pluck('id'))
                    ->where('status', 'pending')
                    ->count(),
                'earnings_this_month' => (float) Rental::whereIn('item_id', $user->items()->pluck('id'))
                    ->where('status', 'returned')
                    ->whereMonth('updated_at', now()->month)
                    ->sum('total_price'),
            ],
            'incomingRentals' => Rental::with(['item:id,title', 'renter:id,name,email'])
                ->whereIn('item_id', $user->items()->pluck('id'))
                ->where('status', 'pending')
                ->latest()
                ->take(10)
                ->get(),
            'myItems' => $user->items()
                ->latest()
                ->take(10)
                ->get(),
        ]);
    }
}