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

        <div class="content-wrapper">
            <!-- Content Header -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-10">
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
                                <select id="select-product" class="form-control select2" disabled>
                                    <option value="">Pilih Tahun Terlebih Dahulu</option>
                                </select>
                            </div>
                            <!-- Kartu untuk menampilkan data sepeda -->
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <td class="info-label" width="35%">Harga Sepeda</td>
                                        <td width="5%">:</td>
                                        <td class="info-value" id="product-price">-</td>
                                    </tr>
                                    <tr>
                                        <td class="info-label">Total Sepeda Terjual</td>
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

                        <!-- Kartu untuk input target pendapatan -->
                        <div class="card">
                            <div class="card-title card-target">Analisis What-If Target Pendapatan</div>
                            <div id="card-target-content">
                                <div class="form-group">
                                    <label for="select-variable">Variabel yang Ingin Diubah</label>
                                    <select id="select-variable" class="form-control">
                                        <option value="" selected disabled>Pilih Variabel</option>
                                        <option value="price">Harga</option>
                                        <option value="sales">Total Sepeda Terjual</option>
                                        <option value="revenue">Total Pendapatan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="input-target">Nilai Variabel</label>
                                    <input type="number" id="input-target" class="form-control"
                                        placeholder="Masukkan nilai">
                                </div>
                                <button class="btn-whatif">Analisis What-If</button>
                            </div>
                        </div>
                    </div>

                    <!-- Tampilan hasil analisis What-If -->
                    <div class="card" id="card-analisis-hasil" style="display: none;">
                        <div class="card-title card-analisis-hasil">Hasil Analisis What-If</div>
                        <div class="card-body">
                            <div class="card">
                                <div class="card-title" id="hasil-1"></div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="50%" id="caption-price-1"><strong>Harga</strong></td>
                                            <td>:</td>
                                            <td>$<span id="result-price-1">-</span></td>
                                        </tr>
                                        <tr>
                                            <td width="50%" id="caption-sales-1"><strong>Total Sepeda Terjual</strong></td>
                                            <td>:</td>
                                            <td><span id="result-sales-1">-</span> barang</td>
                                        </tr>
                                        <tr>
                                            <td width="50%" id="caption-revenue-1"><strong>Pendapatan</strong></td>
                                            <td>:</td>
                                            <td>$<span id="result-revenue-1">-</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card">
                                <div class="card-title" id="hasil-2">
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="50%" id="caption-price-2"><strong>Harga</strong></td>
                                            <td>:</td>
                                            <td>$<span id="result-price-2">-</span></td>
                                        </tr>
                                        <tr>
                                            <td width="50%" id="caption-sales-2"><strong>Total Sepeda Terjual</strong></td>
                                            <td>:</td>
                                            <td><span id="result-sales-2">-</span></td>
                                        </tr>
                                        <tr>
                                            <td width="50%" id="caption-revenue-2"><strong>Pendapatan</strong></td>
                                            <td>:</td>
                                            <td>$<span id="result-revenue-2">-</span></td>
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
        $(document).ready(function() {
            // Inisialisasi Select2
            $('.select2').select2({
                theme: 'bootstrap4',
                placeholder: "Pilih Produk",
                allowClear: true
            });

            const $productDropdown = $('#select-product');
            const $yearDropdown = $('#select-year');

            $yearDropdown.change(function() {
                const selectedYear = $(this).val();

                // reset dropdown produk
                resetProductDropdown();

                if (selectedYear) {
                    // aktifkan dropdown produk
                    $productDropdown.prop('disabled', false);

                    // load data produk berdasarkan tahun
                    $.ajax({
                        url: "<?= base_url('whatif/getProductsByYear') ?>",
                        type: "POST",
                        data: {
                            year: selectedYear
                        },
                        success: function(response) {
                            if (response.status === 'success') {
                                // tambahkan data produk ke dropdown
                                populateProductDropdown(response.products);
                            } else {
                                alert(response.message);
                            }
                        },
                        error: function() {
                            alert('Gagal mengambil data produk.');
                        }
                    });
                } else {
                    // jika tahun kosong, matikan dropdown produk
                    $productDropdown.prop('disabled', true);
                }
            });

            function populateProductDropdown(products) {
                $productDropdown.append('<option value="">Pilih Produk</option>');
                products.forEach(product => {
                    const optionText = `${product.product_name} (${product.category_name})`;
                    $productDropdown.append(new Option(optionText, product.product_id));
                });
            }

            // mereset dropdown Produk
            function resetProductDropdown() {
                $productDropdown.prop('disabled', true).empty();
                $productDropdown.append('<option value="">Pilih Tahun Terlebih Dahulu</option>');
                $('#product-price').text('-');
                $('#product-sales').text('-');
                $('#product-revenue').text('-');
            }

            // menampilkan detail produk setelah tahun dan produk dipilih
            $('#select-year, #select-product').change(function() {
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
                        success: function(response) {
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
                        error: function() {
                            resetProductInfo();
                            alert('Terjadi kesalahan saat mengambil data.');
                        }
                    });
                } else {
                    resetProductInfo();
                }
            });

            // event klik tombol Analisis What-If
            $('.btn-whatif').click(function() {

                const revenue = $('#product-revenue').text().replace('$', '');
                const product_price = $('#product-price').text().replace('$', '');
                const product_sales = $('#product-sales').text().replace(' barang', '');
                const variable = $('#select-variable').val()
                const target_variable_value = $('#input-target').val()

                console.log(revenue, product_price, product_sales, variable, target_variable_value);

                // validasi input target pendapatan
                if (!target_variable_value) {
                    alert('Masukkan nilai variabel!');
                    return;
                }

                // validasi data harga dan penjualan
                if (isNaN(product_price) || isNaN(product_sales)) {
                    alert('Data harga dan penjualan produk tidak valid!');
                    return;
                }

                // mengirimkan data ke controller analyseWhatIf
                $.ajax({
                    url: "<?= base_url('whatif/analyseWhatIf') ?>",
                    type: "POST",
                    data: {
                        price: product_price,
                        total_sales: product_sales,
                        revenue: revenue,
                        variable: variable,
                        target_variable_value: target_variable_value,
                    },
                    success: function(response) {
                        console.log(response);
                        if (response.status === 'success') {
                            const data = response.data;

                            // menampilkan hasil analisis
                            if (variable === 'price') {
                                $('#result-price-1').text(target_variable_value);
                                $('#result-price-2').text(target_variable_value);
                                $('#caption-price-1').css('color', 'green');
                                $('#caption-price-2').css('color', 'green');

                                // jika jumlah revenue tetap
                                $('#hasil-1').text('Jika Total Pendapatan Tetap');
                                $('#result-sales-1').text(data.new_sales_total_if_price);
                                $('#caption-sales-1').css('color', 'red');
                                $('#result-revenue-1').text(revenue);
                                $('#caption-revenue-1').css('color', 'black');


                                // jika sales tetap
                                $('#hasil-2').text('Jika Total Sepeda Terjual Tetap');
                                $('#result-sales-2').text(product_sales);
                                $('#caption-sales-2').css('color', 'black');
                                $('#result-revenue-2').text(data.new_revenue_if_price);
                                $('#caption-revenue-2').css('color', 'red');
                            } else if (variable === 'sales') {
                                $('#result-sales-1').text(target_variable_value);
                                $('#result-sales-2').text(target_variable_value);
                                $('#caption-sales-1').css('color', 'green');
                                $('#caption-sales-2').css('color', 'green');

                                // jika harga tetap
                                $('#hasil-1').text('Jika Harga Tetap');
                                $('#result-price-1').text(product_price);
                                $('#caption-price-1').css('color', 'black');
                                $('#result-revenue-1').text(data.new_revenue_if_sales);
                                $('#caption-revenue-1').css('color', 'red');

                                // jika revenue tetap
                                $('#hasil-2').text('Jika Total Pendapatan Tetap');
                                $('#result-price-2').text(data.new_price_if_sales);
                                $('#caption-price-2').css('color', 'red');
                                $('#result-revenue-2').text(revenue);
                                $('#caption-revenue-2').css('color', 'black');
                            } else if (variable === 'revenue') {
                                $('#result-revenue-1').text(target_variable_value);
                                $('#result-revenue-2').text(target_variable_value);
                                $('#caption-revenue-1').css('color', 'green');
                                $('#caption-revenue-2').css('color', 'green');

                                // jika harga tetap
                                $('#hasil-1').text('Jika Harga Tetap');
                                $('#result-price-1').text(product_price);
                                $('#caption-price-1').css('color', 'black');
                                $('#result-sales-1').text(data.new_sales_total_if_revenue);
                                $('#caption-sales-1').css('color', 'red');

                                // jika sales tetap
                                $('#hasil-2').text('Jika Total Sepeda Terjual Tetap');
                                $('#result-price-2').text(data.new_price_if_revenue);
                                $('#caption-price-2').css('color', 'red');
                                $('#result-sales-2').text(product_sales);
                                $('#caption-sales-2').css('color', 'black');
                            }


                            $('#card-analisis-hasil').show();
                        } else {
                            alert(response.message);
                        }
                    },
                    error: function() {
                        alert('Terjadi kesalahan saat melakukan analisis.');
                    }
                });
            });

            function showWhatIfResult() {
                $('#card-analisis-hasil').show();
            }
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