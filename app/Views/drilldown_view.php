<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistem Informasi Eksekutif Toko Sepeda</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
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
        <?= view('partials/navbar') ?>

        <!-- Sidebar -->
        <?= view('partials/sidebar') ?>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Dashboard Toko Sepeda</h1>
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

        <!-- Footer -->
        <?= view('partials/footer') ?>
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
    <!-- <script src="<?= base_url('adminlte/dist/js/demo.js') ?>"></script> -->
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="<?= base_url('adminlte/dist/js/pages/dashboard3.js') ?>"></script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Document loaded');
            const salesData = <?= json_encode($sales_per_year) ?>;
            console.log('Sales Data:', salesData);
            const seriesData = salesData.map(item => ({
                name: item.year,
                y: Math.round(parseFloat(item.total_sales) * 100) /
                    100, // Round y value to two decimal places
                drilldown: item.year
            }));
            console.log('Series Data:', seriesData);

            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Data Pendapatan Tahun 2016 - 2018'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total Pendapatan dalam $'
                    }
                },
                series: [{
                    name: 'Total Pendapatan $',
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
                    let level, value, year;

                    if (e.point.drilldown.match(/^\d{4}$/)) {
                        level = 'year';
                        value = e.point.name;
                    } else if (e.point.drilldown.includes('-')) {
                        level = 'brand';
                        value = e.point.drilldown.split('-')[1];
                        year = e.point.drilldown.split('-')[0];
                    } else {
                        level = 'brand';
                        value = e.point.name;
                    }

                    console.log('Drilldown Level:', level);
                    console.log('Drilldown Value:', value);

                    chart.showLoading('Loading data...');

                    fetch(`<?= base_url('drilldown/getDrilldownData') ?>/${level}/${value}?year=${year || e.point.name}`)
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
                                        y: Math.round(parseFloat(item.total_sales) * 100) /
                                            100,
                                        drilldown: level === 'brand' ? '' : id
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