<?php
session_start();
        if (!empty($_GET['action'])) {
            $action = $_GET['action'];
        } else {
            $action = 'main';
        }
        $actions = ['select' => 'control/selectControl.php',
            'insert' => 'control/insertControl.php',
            'main' => 'control/mainC.php',
            'getselected' => 'control/getselectedC.php',
            'location' => 'control/detailC.php',
            'delete' => 'control/deleteControl.php',
            'admin' => 'control/adminC.php',
            'logOut' => 'control/logOutC.php',
            'update' => 'control/updateControl.php'];

        if (array_key_exists($action, $actions)):
            require $actions[$action];
        else:
            require"view/error.php";
            exit;
        endif;
?>
