<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Add the three name parts after 'name' (order for readability)
            $table->string('first_name', 60)->nullable()->after('name');
            $table->string('middle_name', 60)->nullable()->after('first_name');
            $table->string('last_name', 60)->nullable()->after('middle_name');
        });

        // Backfill existing users: assume the first word is first name,
        // the last word is last name, and anything in between is middle.
        // Skip if you're starting fresh.
        $users = \DB::table('users')->get();
        foreach ($users as $user) {
            $parts = preg_split('/\s+/', trim($user->name));
            $count = count($parts);

            $first  = $parts[0] ?? '';
            $last   = $count > 1 ? $parts[$count - 1] : '';
            $middle = $count > 2 ? implode(' ', array_slice($parts, 1, -1)) : null;

            \DB::table('users')->where('id', $user->id)->update([
                'first_name'  => $first,
                'middle_name' => $middle,
                'last_name'   => $last,
            ]);
        }

        // Keep 'name' as a nullable field going forward — legacy apps
        // that still read it will keep working via the accessor.
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['first_name', 'middle_name', 'last_name']);
        });
    }
};