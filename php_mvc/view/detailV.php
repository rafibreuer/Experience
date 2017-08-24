<?php
$style = '.row:nth-child(even){text-transform:uppercase;color:blue;}';
include"view/top.php";
?>
<div class="container">
    <div class="row text-center">
        <h2>Welcome to Our Store located on....</h2>
    </div>

    <div class="row text-center">
        <?php foreach ($statement as $s): ?>
            <h2><?= $s['street'] ?></h2>
            <h2><?= $s['city'] ?></h2>
            <h2><?= $s['state'] ?></h2>
            <h2><?= $s['zip'] ?></h2>
            <h2><?= "Hours " . $s['hours'] ?></h2>
        <?php endforeach; ?>
    </div>

</div>
<?php include"view/bottom.php"; ?>
