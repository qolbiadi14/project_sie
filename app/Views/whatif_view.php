<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistem Informasi Eksekutif Toko Sepeda</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="<?= base_url('adminlte/plugins/fontawesome-free/css/all.min.css') ?>">
    <!-- AdminLTE -->
    <link rel="stylesheet" href="<?= base_url('adminlte/dist/css/adminlte.min.css') ?>">
    <style>
        /* Styling untuk kartu (kotak) */
        .card-container {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 48%;
            /* Set width of each card */
        }

        .card-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        select,
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        select:hover {
            cursor: pointer;
        }

        .info-table {
            width: 100%;
            border-collapse: collapse;
        }

        .info-label {
            font-weight: bold;
            padding-right: 10px;
        }


        .btn-whatif {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
        }

        .btn-whatif:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper">
        <!-- Navbar -->
        <?= view('partials/navbar') ?>

        <!-- Sidebar -->
        <?= view('partials/sidebar') ?>

        <!-- Content Wrapper -->
        <div class="content-wrapper">
            <!-- Content Header -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0"><?= $title ?></h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <section class="content">
                <div class="container-fluid">
                    <p>Ini adalah halaman untuk Analisis What-If.</p>

                    <div class="card-container">
                        <!-- Kartu Data Sepeda -->
                        <div class="card">
                            <div class="card-title">Data Sepeda</div>
                            <!-- Dropdown untuk memilih tahun dan sepeda -->
                            <select>
                                <option value="">Pilih Tahun</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                            <select>
                                <option value="">Pilih Sepeda</option>
                                <option value="mountain">Mountain Bike</option>
                                <option value="road">Road Bike</option>
                                <option value="hybrid">Hybrid Bike</option>
                            </select>
                            <!-- Data Sepeda -->
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td class="info-label" width="30%">Harga Sepeda</td>
                                        <td width="5%">:</td>
                                        <td class="info-value">$200</td>
                                    </tr>
                                    <tr>
                                        <td class="info-label">Total Penjualan</td>
                                        <td>:</td>
                                        <td class="info-value">30</td>
                                    </tr>
                                    <tr>
                                        <td class="info-label">Total Pendapatan</td>
                                        <td>:</td>
                                        <td class="info-value">$6000</td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                        <!-- Kartu Data Analisis What-If -->
                        <div class="card">
                            <div class="card-title">Data Analisis What-If</div>
                            <!-- Dropdown untuk memilih variabel yang akan diubah -->
                            <select>
                                <option value="price">Harga</option>
                                <option value="sales">Total Penjualan</option>
                                <option value="income">Total Pendapatan</option>
                            </select>
                            <!-- Input untuk nilai variabel yang ingin diubah -->
                            <input type="text" placeholder="Masukkan nilai baru">
                            <!-- Tombol Analisis What-If -->
                            <button class="btn-whatif">Analisis What-If</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <?= view('partials/footer') ?>
    </div>

    <!-- Scripts -->
    <script src="<?= base_url('adminlte/plugins/jquery/jquery.min.js') ?>"></script>
    <script src="<?= base_url('adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js') ?>"></script>
    <script src="<?= base_url('adminlte/dist/js/adminlte.min.js') ?>"></script>
</body>

</html>