<x-guest-layout>
    <div class="mb-4 text-center">
        <h3 class="font-bold text-xl text-gray-800">Pendaftaran Berhasil! ✅</h3>
    </div>

    <x-auth-session-status class="mb-4" :status="session('status')" />

    <div class="text-sm text-gray-600 text-center">
        <p>Akun Anda telah berhasil dibuat.</p>
        <p class="mt-2">
            Mohon tunggu persetujuan dari Super Admin agar Anda bisa login.
        </p>
    </div>

    <div class="flex items-center justify-center mt-4">
        <a href="{{ route('login') }}" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Kembali ke Halaman Login
        </a>
    </div>
</x-guest-layout>