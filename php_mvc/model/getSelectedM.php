<?php

require "utils/db.php";

if (!empty($_GET['sefer'])) {
    $sefer = $_GET['sefer'];
    foreach ($sefer as $s):
        try {
            $query = 'SELECT * FROM pcs_stuff WHERE id=?';
            $statement = $db->prepare($query);
            $statement->bindValue(1, $s);
            $statement->execute();
            $result = $statement->fetch();
            $results1[$s] = array($result['name'], $result['price'], $result['type']);
        } catch (DBOException $e) {
            require "view/error.php";
        }endforeach;
} else {
    $error = "no sefer";
    require "view/error.php";
    exit;
}
?>