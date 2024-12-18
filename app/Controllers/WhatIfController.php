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

        $data = [
            'title' => 'Analisis What-If',
            'years' => $years,
        ];

        return view('whatif_view', $data);
    }

    public function getProductsByYear()
    {
        $year = $this->request->getPost('year');

        if (!$year) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Tahun harus dipilih.'
            ]);
        }

        // Ambil produk berdasarkan tahun yang dipilih user
        $products = $this->whatIfModel->getProductsByYear($year);

        if (!$products) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Tidak ada produk untuk tahun ini.'
            ]);
        }

        return $this->response->setJSON([
            'status' => 'success',
            'products' => $products
        ]);
    }

    // Ambil detail data produk berdasarkan tahun dan produk yang dipilih
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
        // ambil data dari request
        $variable = $this->request->getPost('variable');
        $price = $this->request->getPost('price');
        $sales_total = $this->request->getPost('total_sales');
        $revenue = $this->request->getPost('revenue');
        $target_variable_value = $this->request->getPost('target_variable_value');

        // validasi input
        if (!$variable || !$price || !$sales_total || !$revenue || !$target_variable_value) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Semua input (variable, price, total_sales, revenue, target_variable_value) harus diisi.',
            ]);
        }

        if ($price <= 0 || $sales_total <= 0 || $revenue <= 0 || $target_variable_value <= 0) {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'Nilai price, total_sales, revenue, dan target_variable_value harus lebih besar dari nol.',
            ]);
        }

        $result = [];

        switch ($variable) {
            case 'price':
                // Jika harga diubah
                $new_sales_total_if_price = ceil($revenue / $target_variable_value);
                $new_revenue_if_price = $target_variable_value * $sales_total;
                $result = [
                    'new_sales_total_if_price' => $new_sales_total_if_price,
                    'new_revenue_if_price' => $new_revenue_if_price,
                ];
                break;

            case 'sales':
                // Jika total penjualan diubah
                $new_revenue_if_sales = $price * $target_variable_value;
                $new_price_if_sales = round($revenue / $target_variable_value, 2);
                $result = [
                    'new_revenue_if_sales' => $new_revenue_if_sales,
                    'new_price_if_sales' => $new_price_if_sales,
                ];
                break;

            case 'revenue':
                // Jika total pendapatan diubah
                $new_sales_total_if_revenue = ceil($target_variable_value / $price);
                $new_price_if_revenue = round($target_variable_value / $sales_total, 2);
                $result = [
                    'new_sales_total_if_revenue' => $new_sales_total_if_revenue,
                    'new_price_if_revenue' => $new_price_if_revenue,
                ];
                break;

            default:
                return $this->response->setJSON([
                    'status' => 'error',
                    'message' => 'Variabel yang dipilih tidak valid.',
                ]);
        }

        return $this->response->setJSON([
            'status' => 'success',
            'data' => $result,
        ]);
    }
}
