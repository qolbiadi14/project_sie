<?php

namespace App\Models;

use CodeIgniter\Model;

class WhatIfModel extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'product_id';

    // ambil tahun unik
    public function getOrderYears()
    {

        $query = $this->db->table('orders')
            ->select('DISTINCT(YEAR(order_date)) as year')
            ->orderBy('year', 'DESC')
            ->get();

        return $query->getResultArray();
    }

    // ambil semua produk berdasarkan tahun penjualan yang dipilih user

    public function getProductsByYear($year)
    {
        $query = $this->db->table('products p')
            ->select('p.product_id, p.product_name, c.category_name')
            ->join('categories c', 'c.category_id = p.category_id')
            ->join('order_items oi', 'oi.product_id = p.product_id')
            ->join('orders o', 'o.order_id = oi.order_id')
            ->where('YEAR(o.order_date)', $year)
            ->groupBy('p.product_id')
            ->orderBy('p.product_name', 'ASC')
            ->get();

        return $query->getResultArray();
    }

    // Ambil detail data produk berdasarkan tahun dan produk yang dipilih
    public function getProductDetails($year, $productId)
    {
        $query = $this->db->table('orders o')
            ->select('p.list_price as product_price, SUM(oi.quantity) as total_sales, ROUND(SUM(oi.quantity * oi.list_price), 2) as total_revenue')
            ->join('order_items oi', 'o.order_id = oi.order_id')
            ->join('products p', 'p.product_id = oi.product_id')
            ->where('YEAR(o.order_date)', $year)
            ->where('p.product_id', $productId)
            ->groupBy('p.product_id')
            ->get();

        return $query->getRowArray();
    }
}
