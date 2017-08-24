<?php
$style = " select,body,input{text-transform:capitalize;}";
include'view/top.php';
?>
<div class="container">
    <div class="row text-center">
        <?php if (!empty($deleted)): ?>
            <div class="row">
                <div class="alert alert-success text-center">
                    <h3>Selection was successfuly deleted</h3>
                </div>
            </div>
        <?php endif; ?>
        <form class="col-sm-offset-4" action="index.php?action=delete" method="POST">
            <div class="col-sm-6">
                <label>Delete Seforim</label>
                <select name="sefer[]" multiple class="col-sm-12 text-center">
                    <?php foreach ($results as $sefer): ?>
                        <option value="<?= $sefer['id'] ?>" <?php if (!empty($sefers) && in_array($sefer['id'], $sefers)) echo 'selected'; ?>>
                            <?php echo $sefer['name']; ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <?php if (!empty($sefers) && empty($_POST['confirm']) && empty($deleted)): ?>
                    <h5><input type="checkbox" name="confirm"/>confirm deletion of selected <?php endif; ?></h5>
                <h2><input type ="submit" value="delete" class="btn btn-warning"/></h2>

            </div>
        </form>
    </div>
</div>
<?php include'view/bottom.php'; ?>
