<?php

namespace App\Controllers;

use App\Models\DrilldownModel;

class DrilldownController extends BaseController
{
    public function index()
    {
        $drilldownModel = new DrilldownModel();
        $data['sales_per_year'] = $drilldownModel->getSalesPerYear();
        return view('drilldown_view', $data);
    }

    public function getDrilldownData($level, $value)
    {
        $drilldownModel = new DrilldownModel();

        if ($level === 'year') {
            $data = $drilldownModel->getSalesPerBrand($value); // $value adalah tahun
        } elseif ($level === 'brand') {
            $year = $this->request->getGet('year');
            $data = $drilldownModel->getSalesPerProduct($value, $year); // $value adalah brand_name
        } else {
            return $this->response->setJSON(['error' => 'Invalid drilldown level']);
        }

        return $this->response->setJSON($data);
    }
}
