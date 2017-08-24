<?php
include'utils/functions.php';
$style = " select,body,input{text-transform:capitalize;}td:last-child{text-align:right;}a{color:red;}.checkbox{padding-left:20px;}";
include"view/top.php";
?>
<div class="container">
    <div class="row text-center">
        <div class="col-sm-2 well">
            <form class="form form-horizontal checkbox text-justify">
                <?php foreach ($checkboxesQ as $c): ?>
                    <input type="checkbox" name="<?= $c['type']; ?>" <?= $checked[$c['type']]; ?>>
                    <?php echo $c['type'] . "<br>";
                endforeach; ?>
                <input type="hidden" name="action" value="select" />
                <input type="submit" value="filter" action="index.php" class="btn btn-primary" />
            </form>
        </div>

        <form class="col-sm-offset-4" action="index.php?action=getselected" method="GET">
            <div class="col-sm-6">
                <label>Select Stuff</label>

                <select name="sefer[]" multiple class="col-sm-12 text-center">
                    <?php
                    foreach ($results as $sefer)
                        echo createOption($sefer['name'], $sefer['id']);
                    ?>
                </select>


                <h2><input type ="submit" value="submit" class="btn btn-primary"/></h2>
                <input type="hidden" name="action" value="getselected" />
            </div>
        </form>
    </div>

    <?php include"view/bottom.php"; ?>
