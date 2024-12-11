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
    <!-- Select2 -->
    <link rel="stylesheet" href="<?= base_url('adminlte/plugins/select2/css/select2.min.css') ?>">
    <link rel="stylesheet"
        href="<?= base_url('adminlte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') ?>">
    <style>
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
        }

        .card-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        #card-analisis {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        #card-analisis-hasil {
            width: 100%;
        }

        .card-title.card-sepeda {
            background-color: #fcba03;
            color: white;
            padding: 10px;
            border-radius: 5px 5px 0 0;
        }

        .card-title.card-target {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border-radius: 5px 5px 0 0;
        }

        #card-target-content {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
        }

        .card-title.card-analisis-hasil {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border-radius: 5px 5px 0 0;
        }


        #card-analisis-hasil .card-body {
            display: flex;
        }

        .btn-whatif {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
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
                            <h1 class="m-0"><?= $title ?> Pendapatan Toko Sepeda</h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="card-container">
                        <!-- Kartu Data Sepeda -->
                        <div class="card">
                            <div class="card-title card-sepeda">Data Sepeda</div>
                            <!-- Dropdown untuk memilih tahun -->
                            <div class="form-group">
                                <label for="select-year">Pilih Tahun</label>
                                <select id="select-year" class="form-control">
                                    <option value="">Pilih Tahun</option>
                                    <?php foreach ($years as $year): ?>
                                        <option value="<?= $year['year'] ?>"><?= $year['year'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <!-- Dropdown untuk memilih produk -->
                            <div class="form-group">
                                <label for="select-product">Pilih Sepeda</label>
                                <select id="select-product" class="form-control select2">
                                    <option value="">Pilih Produk</option>
                                    <?php foreach ($products as $product): ?>
                                        <option value="<?= $product['product_id'] ?>"><?= $product['product_name'] ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <!-- Data Sepeda -->
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td class="info-label" width="30%">Harga Sepeda</td>
                                        <td width="5%">:</td>
                                        <td class="info-value" id="product-price">-</td>
                                    </tr>
                                    <tr>
                                        <td class="info-label">Total Penjualan</td>
                                        <td>:</td>
                                        <td class="info-value" id="product-sales">-</td>
                                    </tr>
                                    <tr>
                                        <td class="info-label">Total Pendapatan</td>
                                        <td>:</td>
                                        <td class="info-value" id="product-revenue">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Data Target Pendapatan -->
                        <div class="card">
                            <div class="card-title card-target">Analisis What-If Target Pendapatan</div>
                            <div id="card-target-content">
                                <!-- <div class="form-group">
                                    <label for="select-variable">Variabel yang Diubah</label>
                                    <select id="select-variable" class="form-control">
                                        <option value="" selected disabled>Pilih Variabel</option>
                                        <option value="price">Harga</option>
                                        <option value="sales">Total Penjualan</option>
                                        <option value="revenue">Total Pendapatan</option>
                                    </select>
                                </div> -->
                                <div class="form-group">
                                    <label for="input-target">Target Pendapatan</label>
                                    <input type="text" id="input-target" class="form-control"
                                        placeholder="Masukkan target pendapatan">
                                </div>
                                <button class="btn-whatif">Analisis What-If</button>
                            </div>
                        </div>
                    </div>

                    <!-- Tampilan Hasil Analisis What-If -->
                    <div class="card" id="card-analisis-hasil" style="display: none;">
                        <div class="card-title card-analisis-hasil">Hasil Analisis What-If</div>
                        <div class="card-body">
                            <div class="card">
                                <div class="card-title">Jika Harga Sepeda Tetap</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="30%"><strong>Harga</strong></td>
                                            <td>:</td>
                                            <td><span id="result-price">-</span></td>
                                        </tr>
                                        <tr>
                                            <td width="30%"><strong style="color: red">Total Penjualan</strong></td>
                                            <td>:</td>
                                            <td><span id="new-sales-total">-</span> barang</td>
                                        </tr>
                                        <tr>
                                            <td width="30%"><strong style="color: green">Pendapatan</strong></td>
                                            <td>:</td>
                                            <td>$<span class="result-target-revenue">-</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card">
                                <div class="card-title">Jika Total Penjualan Sepeda Tetap
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="30%"><strong style="color: red">Harga</strong></td>
                                            <td>:</td>
                                            <td>$<span id="new-price">-</span></td>
                                        </tr>
                                        <tr>
                                            <td width="30%"><strong>Total Penjualan</strong></td>
                                            <td>:</td>
                                            <td><span id="result-sales-total">-</span></td>
                                        </tr>
                                        <tr>
                                            <td width="30%"><strong style="color: green">Pendapatan</strong></td>
                                            <td>:</td>
                                            <td>$<span class="result-target-revenue">-</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
    <script src="<?= base_url('adminlte/plugins/select2/js/select2.full.min.js') ?>"></script>
    <script src="<?= base_url('adminlte/dist/js/adminlte.min.js') ?>"></script>
    <script>
        $(document).ready(function () {
            // Inisialisasi Select2
            $('.select2').select2({
                theme: 'bootstrap4',
                placeholder: "Pilih Produk",
                allowClear: true
            });

            // Menampilkan detail produk setelah tahun dan produk dipilih
            $('#select-year, #select-product').change(function () {
                const year = $('#select-year').val();
                const productId = $('#select-product').val();

                if (year && productId) {
                    $.ajax({
                        url: "<?= base_url('whatif/getProductDetails') ?>",
                        type: "POST",
                        data: {
                            year,
                            product_id: productId
                        },
                        success: function (response) {
                            if (response.status === 'success') {
                                const data = response.data;
                                $('#product-price').text('$' + data.product_price);
                                $('#product-sales').text(data.total_sales + ' barang');
                                $('#product-revenue').text('$' + data.total_revenue);
                            } else {
                                resetProductInfo();
                                alert(response.message);
                            }
                        },
                        error: function () {
                            resetProductInfo();
                            alert('Terjadi kesalahan saat mengambil data.');
                        }
                    });
                } else {
                    resetProductInfo();
                }
            });

            // Menangani klik tombol Analisis What-If
            $('.btn-whatif').click(function () {
                const target_revenue = $('#input-target').val();
                const product_price = $('#product-price').text().replace('$', '');
                const product_sales = $('#product-sales').text().replace(' barang', '');

                // Validasi input target pendapatan
                if (!target_revenue || isNaN(target_revenue) || target_revenue <= 0) {
                    alert('Masukkan target pendapatan yang valid!');
                    return;
                }

                // Validasi data harga dan penjualan
                if (isNaN(product_price) || isNaN(product_sales)) {
                    alert('Data harga dan penjualan produk tidak valid!');
                    return;
                }

                // Mengirimkan data ke controller analyseWhatIf
                $.ajax({
                    url: "<?= base_url('whatif/analyseWhatIf') ?>",
                    type: "POST",
                    data: {
                        price: product_price,
                        total_sales: product_sales,
                        target_revenue: target_revenue
                    },
                    success: function (response) {
                        if (response.status === 'success') {
                            const data = response.data;

                            // Menampilkan hasil analisis dalam card
                            $('#result-price').text($('#product-price').text());
                            $('#new-sales-total').text(data.new_sales_total);
                            $('#new-price').text(data.new_price);
                            $('#result-sales-total').text($('#product-sales').text());
                            $('.result-target-revenue').text(target_revenue);

                            // Menampilkan card hasil analisis
                            $('#card-analisis-hasil').show();
                        } else {
                            alert(response.message);
                        }
                    },
                    error: function () {
                        alert('Terjadi kesalahan saat melakukan analisis.');
                    }
                });
            });

            // Fungsi untuk mereset informasi produk
            function resetProductInfo() {
                $('#product-price').text('-');
                $('#product-sales').text('-');
                $('#product-revenue').text('-');
            }
        });
    </script>


</body>

</html>