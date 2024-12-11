<?php

namespace App\Controllers;

use App\Models\WhatIfModel;

class WhatIfController extends BaseController
{
    protected $whatIfModel;

    public function __construct()
    {
        $this->whatIfModel = new WhatIfModel();
    }

    public function index()
    {
        // Ambil data tahun dan produk dari database
        $years = $this->whatIfModel->getOrderYears();
        $products = $this->whatIfModel->getProducts();

        $data = [
            'title' => 'Analisis What-If',
            'years' => $years,
            'products' => $products
        ];

        return view('whatif_view', $data);
    }

    public function getProductDetails()
    {
        $year = $this->request->getPost('year');
        $productId = $this->request->getPost('product_id');

        // Validasi input
        if (!$year || !$productId) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Tahun dan produk harus dipilih.'
            ]);
        }

        // Ambil data produk
        $productDetails = $this->whatIfModel->getProductDetails($year, $productId);

        if (!$productDetails) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Data produk tidak ditemukan.'
            ]);
        }

        return $this->response->setJSON([
            'status' => 'success',
            'data' => $productDetails
        ]);
    }

    public function analyseWhatIf()
    {
        // Ambil data dari request
        $price = $this->request->getPost('price');
        $sales_total = $this->request->getPost('total_sales');
        $target_revenue = $this->request->getPost('target_revenue');

        // Validasi input
        if (!$price || !$sales_total || !$target_revenue) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Semua input (price, total_sales, target_revenue) harus diisi.',
            ]);
        }

        if ($price <= 0 || $sales_total <= 0 || $target_revenue <= 0) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Nilai price, total_sales, dan target_revenue harus lebih besar dari nol.',
            ]);
        }

        // Perhitungan analisis What-If
        // Jika harga tetap, hitung total penjualan baru
        $new_sales_total = $target_revenue / $price;

        // Jika total penjualan tetap, hitung harga baru
        $new_price = $target_revenue / $sales_total;

        // Pembulatan hasil
        $new_sales_total = ceil($new_sales_total);
        $new_price = round($new_price, 2);

        return $this->response->setJSON([
            'status' => 'success',
            'data' => [
                'new_sales_total' => $new_sales_total,
                'new_price' => $new_price,
            ],
        ]);
    }


}