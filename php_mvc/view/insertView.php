<?php
$style = '.error,.alert-warning{color:red;}.error::before {content: "*";padding-right: 4px;}';
include"view/top.php";
?>

<div class="container">
    <?php if (!empty($success)): ?>
        <div class="row">
            <div class="alert alert-success text-center">
                <h3><?php foreach ($success as $s)
            echo $s . "<br>"; ?></h3>
            </div>
        </div>
    <?php endif; ?>
    <?php if (!empty($errors)): ?>
        <div class="row">
            <div class="alert alert-warning text-center">
                <h5><?php foreach ($errors as $error):echo $error . "<br>";
    endforeach; ?></h5>
            </div>
        </div>
        <?php endif; ?>
    <div class="row">
<?php foreach ($variables as $field => $z): ?>

            <form class="form-horizontal" method="post">
                <div class="form-group">
                    <label class="control-label col-sm-offset-2 col-sm-2 <?= $variables[$field][0]; ?>">
    <?= $field; ?>
                    </label>
                    <div class="col-sm-4">
                        <input type="text" name="<?= $field; ?>" id="<?= $field; ?>" class="form-control" value="<?= $variables[$field][1]; ?>" placeholder="number1,number2,number3" required>
                    </div>
                </div>
<?php endforeach; ?>
            <div class="form-group">
                <div class="col-sm-offset-4 col-sm-1">
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </div>
            </div>
        </form>
    </div>
    <?php
    include "view/bottom.php";
    