<?php

$variables = ['name' => '', 'price' => '', 'type' => ''];
include'utils/db.php';
if (!empty($_POST['sefer'])) {
    $seferUpdate = $_POST['sefer'];
    $query = "SELECT * FROM pcs_stuff WHERE id=?";
    $statement = $db->prepare($query);
    $statement->bindValue(1, $seferUpdate);
    $statement->execute();
    $statement = $statement->fetch();
    $oldName = $statement['name'];
    $oldPrice = $statement['price'];
    $oldType = $statement['type'];


    if (!empty($_POST['name'])) {
        $name = $_POST['name'];
        $variables['name'] = $name;
    } else
        $name = $oldName;

    if (!empty($_POST['price'])) {
        $price = $_POST['price'];
        if (!is_numeric($price)) {
            $error = "$price is not a price";
        }
        $variables['price'] = $price;
    } else
        $price = $oldPrice;

    if (!empty($_POST['type'])) {
        $type = $_POST['type'];
        $variables['type'] = $type;
    } else
        $type = $oldType;
}


try {
    $query = "SELECT * FROM pcs_stuff ORDER BY name";
    $statement = $db->query($query);
    $results = $statement->fetchAll();
} catch (DBOException $e) {
    require "view/error.php";
}

if (empty($error)) {
    if (!empty($_POST['name']) || !empty($_POST['price']) || !empty($_POST['type'])) {
        $query = "UPDATE pcs_stuff SET name =?,price=?,type=? WHERE id=?";
        $statement = $db->prepare($query);
        $statement->bindValue(1, $name);
        $statement->bindValue(2, $price);
        $statement->bindValue(3, $type);
        $statement->bindValue(4, $seferUpdate);
        $updated = $statement->execute();
        if (!empty($updated)) {
            $updateResult = $oldName;
        }
    }
}
?>