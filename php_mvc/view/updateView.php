<?php
$style = " select,body,input{text-transform:capitalize;}";
include_once'view/top.php';
?>
<div class="container">

    <?php if (!empty($updateResult)): ?>
        <div class="row">
            <div class="alert alert-success text-center">
                <h3><?php echo $updateResult . " was successfuly updated <br>"; ?></h3>
            </div>
        </div>
    <?php endif; ?>
    <form class="form form-horizontal" action="index.php?action=update" method="POST">
        <div class="row">
            <div class="col-sm-4 form-group text-center">
                <label> select sefer to Update </label>
                <select name="sefer" class="col-sm-12 text-center">
                    <?php foreach ($results as $sefer): ?>
                        <option value="<?= $sefer['id'] ?>" <?php if (!empty($seferUpdate) && $sefer['id'] == $seferUpdate) echo 'selected'; ?>>
                            <?php echo'name:' . $sefer['name'] . ', price:' . $sefer['price'] . ', type:' . $sefer['type']; ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
        </div>
        <div class="row col-sm-offset-3">
            <label class="col-sm-offset-3">enter changes</label>
            <?php foreach ($variables as $field => $z):if ($field == 'price') $typ = 'number';
                else $typ = 'text'; ?>

                <div class="form-group">
                    <label class="control-label col-sm-2">
                        <?= $field; ?>
                    </label>
                    <div class="col-sm-4">
                        <input type="<?= $typ ?>" step=".01" name="<?= $field; ?>" id="<?= $field; ?>" class="form-control" value="<?= $variables[$field]; ?>">
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-5 col-sm-1">
                <input type="submit" value="update sefer" class="btn btn-primary" />
            </div>
        </div>
    </form>
</div>
</div>
<?php include'view/bottom.php'; ?>
