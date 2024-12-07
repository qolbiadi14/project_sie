<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/dashboard', 'IndexController::index');
$routes->get('/drilldown', 'DrilldownController::index');
$routes->get('drilldown/getDrilldownData/(:segment)/(:segment)', 'DrilldownController::getDrilldownData/$1/$2');
