<?php
include"view/top.php";
?>
<div class="container">
    <div class="row">
        <div class="alert alert-danger text-center">
            <h2>Something went wrong</h2>
            <?php if (!empty($error)): ?>
                <h2><?= $error ?></h2>
            <?php endif; ?>

        </div>
    </div>
</div>
<?php
include 'view/bottom.php';
?>
