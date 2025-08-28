import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AccordionItem from '@/Components/Shared/AccordionItem'; // Menggunakan komponen yang sudah kita buat

// Kita pindahkan data 'docsContent' langsung ke sini
const docsContent = [
    {
        title: "Panduan Umum Editor JSON",
        content: () => (
            <>
                <p>Fitur-fitur ini berlaku untuk semua editor JSON: <strong>dashboardMenuV3</strong>, <strong>smartCardV2</strong>, dan <strong>embeddedURL-E</strong>.</p>
                <ul>
                    <li><strong>Memuat Konfigurasi:</strong> Salin (copy) seluruh konten dari file JSON yang relevan, lalu tempel (paste) ke dalam area input teks dan klik tombol <strong>Muat Konfigurasi</strong>.</li>
                    <li><strong>Operasi Dasar:</strong> Setelah data dimuat, Anda dapat melakukan operasi standar pada setiap item.</li>
                    <li><strong>Mengubah Urutan:</strong> Untuk item dalam sebuah daftar (array), Anda bisa klik dan geser (drag-and-drop) ikon handle (☰) untuk mengubah urutannya.</li>
                    <li><strong>Ekspor Hasil:</strong> Setelah selesai mengedit, klik tombol <strong>Ekspor ke .json</strong> untuk mengunduh file hasil editan Anda.</li>
                </ul>
            </>
        )
    },
    // ... Tambahkan item-item lainnya dari docsContent di sini ...
    // (Untuk mempersingkat, saya hanya tampilkan satu. Silakan salin sisanya dari file asli Anda)
    {
        title: "Editor: dashboardMenuV3.json",
        content: () => (
            <>
                <p>Editor ini digunakan untuk mengelola item menu di dashboard...</p>
                {/* Isi lengkap konten... */}
            </>
        )
    },
    {
        title: "Editor: smartCardV2.json",
        content: () => (
            <>
                <p>Digunakan untuk mengelola *smart card* yang muncul di halaman utama...</p>
                {/* Isi lengkap konten... */}
            </>
        )
    },
     // Salin SEMUA item dari variabel docsContent lama Anda ke sini
];

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Dokumentasi</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">Utamakan MANDI sebelum bekerja</h2>
                        <p className="text-center text-slate-500 mb-8">Dokumentasi Penggunaan Editor Konfigurasi</p>
                        <div className="bg-white rounded-lg">
                            {docsContent.map((doc, index) => (
                                <AccordionItem key={index} title={doc.title} startOpen={index === 0}>
                                    <doc.content />
                                </AccordionItem>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}