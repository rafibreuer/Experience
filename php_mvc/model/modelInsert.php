<?php

include"utils/db.php";
$post = $_POST;
$errors = [];
$success = [];
$variables = ['name' => array('', ''),
    'price' => array('', ''),
    'type' => array('', '')];

if ($post) {
    foreach ($variables as $f => $v):
        if (!empty($_POST[$f]) && !empty(trim($_POST[$f]))) {
            $variables[$f][1] = $_POST[$f];
            $type = explode(",", $variables[$f][1]);
            foreach ($type as $r):
                if (empty(trim($r))) {
                    $errors[] = $f . ' no blanks';
                    $variables[$f][0] = 'error';
                } elseif ($f === 'price' && !is_numeric(trim($r))) {
                    $errors[] = $r . " is not a valid number";
                    $variables[$f][0] = 'error';
                }endforeach;
        } else {
            $errors[] = $f . ' is a required field';
            $variables[$f][0] = 'error';
        }
    endforeach;

    $names2 = explode(",", $variables['name'][1]);

    $prices = explode(",", $variables['price'][1]);

    if (!empty($names2) && !empty($prices) && !empty($type) && (count($names2) !== count($prices) || count($names2) !== count($type)))
        $errors[] = "Please only enter same amount of items for price , name and type.";
    if (empty($errors)) {
        for ($i = 0; $i < count($names2); $i++):
            $n = $names2[$i];
            $p = $prices[$i];
            $t = $type[$i];

            try {
                $statement = $db->prepare('INSERT INTO pcs_stuff (name, price,type) VALUES(?,?,?)');
                $inserted = $statement->execute([$n, $p, $t]);
                $insert = "$inserted row with name $n & price " . number_format(trim($p), 2) . " and type $t was inserted.";
                if (!empty($inserted)) {
                    $success[] = $insert;
                    $variables['name'][1] = '';
                    $variables['price'][1] = '';
                    $variables['type'][1] = '';
                } else {
                    $errors[] = 'No' . $insert;
                }
            } catch (DBOException $e) {
                require "view/error.php";
            }endfor;
    }
}
?>
