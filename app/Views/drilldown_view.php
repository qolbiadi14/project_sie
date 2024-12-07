<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AdminLTE 3 | Dashboard 3</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="<?= base_url('adminlte/plugins/fontawesome-free/css/all.min.css') ?>">
    <!-- IonIcons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?= base_url('adminlte/dist/css/adminlte.min.css') ?>">
    <style type="text/css">
        .highcharts-figure,
        .highcharts-data-table table {
            min-width: 310px;
            max-width: 800px;
            margin: 1em auto;
        }

        #container {
            height: 400px;
        }

        .highcharts-data-table table {
            font-family: Verdana, sans-serif;
            border-collapse: collapse;
            border: 1px solid #ebebeb;
            margin: 10px auto;
            text-align: center;
            width: 100%;
            max-width: 500px;
        }

        .highcharts-data-table caption {
            padding: 1em 0;
            font-size: 1.2em;
            color: #555;
        }

        .highcharts-data-table th {
            font-weight: 600;
            padding: 0.5em;
        }

        .highcharts-data-table td,
        .highcharts-data-table th,
        .highcharts-data-table caption {
            padding: 0.5em;
        }

        .highcharts-data-table thead tr,
        .highcharts-data-table tr:nth-child(even) {
            background: #f8f8f8;
        }

        .highcharts-data-table tr:hover {
            background: #f1f7ff;
        }

        .highcharts-description {
            margin: 0.3rem 10px;
        }
    </style>
</head>
<!--
`body` tag options:

  Apply one or more of the following classes to to the body tag
  to get the desired effect

  * sidebar-collapse
  * sidebar-mini
-->

<body class="hold-transition sidebar-mini">

    <script src="<?= base_url('code/highcharts.js') ?>"></script>
    <script src="<?= base_url('code/modules/data.js') ?>"></script>
    <script src="<?= base_url('code/modules/drilldown.js') ?>"></script>
    <script src="<?= base_url('code/modules/exporting.js') ?>"></script>
    <script src="<?= base_url('code/modules/export-data.js') ?>"></script>
    <script src="<?= base_url('code/modules/accessibility.js') ?>"></script>

    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <img src="<?= base_url('adminlte/dist/img/AdminLTELogo.png') ?>" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                        <li class="nav-item menu-is-opening menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Sistem Informasi Eksekutif
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="<?= base_url("drilldown") ?>" class="nav-link active">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Drilldown</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="./index2.html" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Analisis What-If</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Dashboard</h1>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <figure class="highcharts-figure" style="max-width: 90%;">
                    <div id="container"></div>
                </figure>
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
            All rights reserved.
            <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.2.0
            </div>
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    <script src="<?= base_url('adminlte/plugins/jquery/jquery.min.js') ?>"></script>
    <!-- Bootstrap -->
    <script src="<?= base_url('adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js') ?>"></script>
    <!-- AdminLTE -->
    <script src="<?= base_url('adminlte/dist/js/adminlte.js') ?>"></script>

    <!-- OPTIONAL SCRIPTS -->
    <script src="<?= base_url('adminlte/plugins/chart.js/Chart.min.js') ?>"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="<?= base_url('adminlte/dist/js/demo.js') ?>"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="<?= base_url('adminlte/dist/js/pages/dashboard3.js') ?>"></script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Document loaded');
            const salesData = <?= json_encode($sales_per_year) ?>;
            console.log('Sales Data:', salesData);
            const seriesData = salesData.map(item => ({
                name: item.year,
                y: Math.round(parseFloat(item.total_sales) * 100) / 100, // Round y value to two decimal places
                drilldown: item.year
            }));
            console.log('Series Data:', seriesData);

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Data Penjualan Tahun 2016 - 2018'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total Penjualan dalam $'
                    }
                },
                series: [{
                    name: 'Total Penjualan $',
                    colorByPoint: true,
                    data: seriesData
                }],
                drilldown: {
                    breadcrumbs: {
                        position: {
                            align: 'right'
                        }
                    },
                    series: []
                }
            });

            // Fetch drilldown data dynamically
            Highcharts.addEvent(Highcharts.Chart, 'drilldown', function(e) {
                if (!e.seriesOptions) {
                    const chart = this;
                    let level, value;

                    if (e.point.drilldown.match(/^\d{4}$/)) {
                        level = 'year';
                        value = e.point.name;
                    } else if (e.point.drilldown.includes('-')) {
                        level = 'brand';
                        value = e.point.drilldown.split('-')[1];
                    } else {
                        level = 'brand';
                        value = e.point.name;
                    }

                    console.log('Drilldown Level:', level);
                    console.log('Drilldown Value:', value);

                    chart.showLoading('Loading data...');

                    fetch(`<?= base_url('drilldown/getDrilldownData') ?>/${level}/${value}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log('Drilldown Data:', data);
                            const drilldownSeries = {
                                name: value,
                                id: e.point.drilldown,
                                data: data.map(item => {
                                    const name = item.brand_name || item.product_name;
                                    const id = level === 'year' ? `${value}-${name}` : name;
                                    return {
                                        name,
                                        y: Math.round(parseFloat(item.total_sales) * 100) / 100,
                                        drilldown: id
                                    };
                                })
                            };

                            chart.hideLoading();
                            chart.addSeriesAsDrilldown(e.point, drilldownSeries);
                        })
                        .catch(error => {
                            console.error('Error fetching drilldown data:', error);
                            chart.hideLoading();
                        });
                }
            });
        });
    </script>
</body>

</html>