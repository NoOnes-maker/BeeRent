<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdult
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        // Skip if not logged in, or already on the age-gate page
        if (! $user || $request->routeIs('age.verify*')) {
            return $next($request);
        }

        // If they have a birthdate and are 18+, let them through
        if ($user->isAdult(18)) {
            return $next($request);
        }

        // Otherwise force them to the age verification page
        return redirect()->route('age.verify');
    }
}