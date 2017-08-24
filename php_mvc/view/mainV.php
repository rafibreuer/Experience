<?php
include"view/top.php";
?>
<div class="container">
    <div class="row text-center">
        <h2>Welcome to Our Store located in....</h2>
    </div>
    <?php foreach ($results as $city): ?>
        <div class="row text-center col-sm-3 col-sm-offset-1">
            <h2><a href="index.php?action=location&city=<?= $city['city'] ?>"><?php echo $city['city']; ?></a></h2>
        </div>
    <?php endforeach; ?>
</div>
<?php include"view/bottom.php"; ?>
