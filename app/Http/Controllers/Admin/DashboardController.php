<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Ambil semua user yang belum diapprove
        $users = User::where('is_approved', false)->get();
        return view('dashboard', ['users_for_approval' => $users]);
    }

    public function approve(User $user)
    {
        $user->update(['is_approved' => true]);
        return back()->with('success', 'User berhasil disetujui.');
    }

    public function reject(User $user)
    {
        $user->delete();
        return back()->with('success', 'User berhasil ditolak/dihapus.');
    }
}