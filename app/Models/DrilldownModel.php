<?php

namespace App\Models;

use CodeIgniter\Model;

class DrilldownModel extends Model
{
    protected $table      = 'orders';
    protected $primaryKey = 'order_id';
    protected $useTimestamps = false;

    public function getSalesPerYear()
    {
        $builder = $this->db->table('order_items');
        $builder->select('YEAR(order_date) AS year, SUM(order_items.quantity * order_items.list_price) AS total_sales');
        $builder->join('orders', 'order_items.order_id = orders.order_id');
        $builder->groupBy('YEAR(order_date)');
        $builder->orderBy('year', 'ASC');
        $query = $builder->get();

        return $query->getResult();
    }

    public function getSalesPerBrand($year)
    {
        $builder = $this->db->table('order_items');
        $builder->select('brands.brand_name, SUM(order_items.quantity * order_items.list_price) AS total_sales', false);
        $builder->join('orders', 'order_items.order_id = orders.order_id');
        $builder->join('products', 'order_items.product_id = products.product_id');
        $builder->join('brands', 'products.brand_id = brands.brand_id');
        $builder->where('YEAR(orders.order_date)', $year);
        $builder->groupBy('brands.brand_id');
        $builder->orderBy('total_sales', 'DESC');
        $query = $builder->get();

        return $query->getResult();
    }

    public function getSalesPerProduct($brand)
    {
        $builder = $this->db->table('order_items');
        $builder->select('products.product_name, SUM(order_items.quantity * order_items.list_price) AS total_sales', false);
        $builder->join('orders', 'order_items.order_id = orders.order_id');
        $builder->join('products', 'order_items.product_id = products.product_id');
        $builder->join('brands', 'products.brand_id = brands.brand_id');
        $builder->where('brands.brand_name', $brand); // Ensure we filter by brand name
        $builder->groupBy('products.product_id');
        $builder->orderBy('total_sales', 'DESC');
        $query = $builder->get();

        return $query->getResult();
    }
}
