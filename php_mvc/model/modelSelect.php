<?php

include"utils/db.php";

try {
    $query = 'SELECT DISTINCT type FROM pcs_stuff ORDER BY type';
    $statement = $db->query($query);
    $checkboxesQ = $statement->fetchAll();
} catch (DBOException $e) {
    require "view/error.php";
}

foreach ($checkboxesQ as $r): $checked[$r['type']] = '';
    if (!empty($_GET [str_replace(' ', '_', $r['type'])])) {
        $query = 'SELECT * FROM pcs_stuff WHERE type = ?';
        $statement = $db->prepare($query);
        $statement->execute([$r['type']]);
        foreach ($statement as $y) {
            $results[] = $y;
        }
        $checked[$r['type']] = 'checked';
    }endforeach;

if (empty($results)):
    try {
        $query = "SELECT * FROM pcs_stuff ORDER BY name";
        $statement = $db->query($query);
        $results = $statement->fetchAll();
    } catch (DBOException $e) {
        require "view/error.php";
    }endif;
?>