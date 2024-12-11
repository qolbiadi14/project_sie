<?php

namespace App\Controllers;

class WhatIfController extends BaseController
{
    public function index()
    {
        // Data yang akan dikirim ke view
        $data = [
            'title' => 'Analisis What-If'
        ];

        // Tampilkan view
        return view('whatif_view', $data);
    }
}