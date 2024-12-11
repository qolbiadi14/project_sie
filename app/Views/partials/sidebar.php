<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="<?= base_url('adminlte/dist/img/AdminLTELogo.png') ?>" alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">SIE Bike Store</span>
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
                            <a href="<?= base_url("drilldown") ?>"
                                class="nav-link <?= (uri_string() == 'drilldown') ? 'active' : '' ?>">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Drilldown</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="<?= base_url('whatif') ?>"
                                class="nav-link <?= (uri_string() == 'whatif') ? 'active' : '' ?>">
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