<?php

include"utils/db.php";
if (!empty($_GET['city'])) {
    $city = $_GET['city'];
    try {
        $statement = $db->prepare('SELECT * FROM pcs_locations WHERE city = ?');
        $selected = $statement->execute([$city]);
        if (empty($selected)) {
            $error = "system coldnt find $city";
            include"view/error.php";
            exit;
        }
    } catch (PDOException $e) {
        require"view/error.php";
        die($e->getMessage());
    }
} else {
    $error = "wrong action";
    include"view/error.php";
    exit;
}
?>

