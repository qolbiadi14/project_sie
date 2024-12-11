<?php

namespace App\Models;

use CodeIgniter\Model;

class WhatIfModel extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'product_id';

    /**
     * ambil tahun unik
     */
    public function getOrderYears()
    {
        $db = \Config\Database::connect();

        $query = $db->table('orders')
            ->select('DISTINCT(YEAR(order_date)) as year')
            ->orderBy('year', 'DESC')
            ->get();

        return $query->getResultArray();
    }

    /**
     * ambil semua produk
     */
    public function getProducts()
    {
        $query = $this->select('product_id, product_name')
            ->orderBy('product_name', 'ASC')
            ->get();

        return $query->getResultArray();
    }

    /**
     * Ambil detail data produk berdasarkan tahun dan produk yang dipilih
     */
    public function getProductDetails($year, $productId)
    {
        $db = \Config\Database::connect();

        $query = $db->table('orders')
            ->select('products.list_price as product_price, SUM(order_items.quantity) as total_sales, SUM(order_items.quantity * order_items.list_price) as total_revenue')
            ->join('order_items', 'orders.order_id = order_items.order_id')
            ->join('products', 'products.product_id = order_items.product_id')
            ->where('YEAR(orders.order_date)', $year)
            ->where('products.product_id', $productId)
            ->groupBy('products.product_id')
            ->get();

        return $query->getRowArray();
    }

}