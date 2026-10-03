<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Rental;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SuperAdminDashboardController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('superadmin/dashboard', [
            'stats' => [
                'total_users'      => User::count(),
                'total_admins'     => User::whereIn('role', ['admin', 'superadmin'])->count(),
                'total_items'      => Item::count(),
                'total_rentals'    => Rental::count(),
                'platform_revenue' => (float) Rental::where('status', 'returned')->sum('total_price'),
            ],
            'flaggedItems' => Item::where('status', 'flagged')
                ->with('owner:id,name,email')
                ->latest()
                ->take(10)
                ->get(),
            'allItems' => Item::with('owner:id,name')
                ->latest()
                ->take(20)
                ->get(['id', 'title', 'daily_rate', 'category', 'status', 'user_id', 'created_at']),
            'recentUsers' => User::latest()->take(10)->get(['id', 'name', 'email', 'role', 'created_at']),
        ]);
    }

    /** Moderator action — delete an item permanently (or restore if soft-deleted) */
    public function deleteItem(Item $item)
    {
        $item->delete(); // uses SoftDeletes
        return back()->with('success', 'Item removed from listings.');
    }

    /** Restore a soft-deleted item */
    public function restoreItem(int $id)
    {
        $item = Item::withTrashed()->findOrFail($id);
        $item->restore();
        return back()->with('success', 'Item restored.');
    }
}