<?php

if (!empty($_POST['password'])) {
    if (password_verify($_POST['password'], '$2y$10$bTthip8BxKYuW1LeO2qWH.xW1jOL5T33vO71itV.Mz66bPN1/Evse')) {
        $_SESSION['admin'] = 'on';
    }
    header('location:index.php?action=select');
}
?>