<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Gate routes by user role.
 *
 * Usage in routes:
 *   ->middleware('role:admin,superadmin')
 *
 * Why middleware + policies (not just one):
 *   - Middleware = "can you reach this area at all?"
 *   - Policy     = "can you act on THIS specific record?"
 *   Both are needed for defense-in-depth.
 */
class EnsureUserHasRole
{
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        if (! $request->user() || ! in_array($request->user()->role->value, $roles, true)) {
            abort(403, 'You do not have permission to access this area.');
        }

        return $next($request);
    }
}