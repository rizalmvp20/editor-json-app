<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\DashboardController; // 1. Tambahkan ini

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tunggu-approval', function () {
    return view('auth.pending');
});

// Routes untuk user yang belum login (Guest)
Route::middleware('guest')->group(function () {
    Route::get('register', [AuthController::class, 'showRegisterForm'])->name('register');
    Route::post('register', [AuthController::class, 'register']);
    Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('login', [AuthController::class, 'login']);
});

// Routes untuk user yang sudah login (Authenticated)
Route::middleware('auth')->group(function () {
    
    // 2. Ubah route dashboard ini
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // 3. Tambahkan dua route baru ini untuk aksi admin
    Route::patch('/admin/users/{user}/approve', [DashboardController::class, 'approve'])->name('admin.approve');
    Route::delete('/admin/users/{user}/reject', [DashboardController::class, 'reject'])->name('admin.reject');
    
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
});
