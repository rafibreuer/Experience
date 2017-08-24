<?php

include"utils/db.php";
try {
    $query = 'SELECT city FROM pcs_locations';
    $results = $db->query($query);
} catch (DBOException $e) {
    require "view/error.php";
}
?>