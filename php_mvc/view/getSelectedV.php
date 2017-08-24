<?php
$col = ['name', 'price', 'type'];

$style = " select,input{text-transform:capitalize;}a{color:red;}";
include_once"view/top.php";
?>
<div class="container">
    <div class="row text-center">
        <a href="index.php?action=select">click here for new selection</a>
    </div>
    <div class="row col-md-4 col-md-offset-4">
        <table class="table table-striped table-bordered table-condensed">
            <tr>
<?php foreach ($col as $f): ?>
                    <th class="text-center">
                    <?= $f; ?>
                    </th>
                    <?php endforeach; ?>
            </tr>
                <?php foreach ($results1 as $row): ?>
                <tr>
                <?php foreach ($row as $r): ?>
                        <td class="text-center">
                        <?= $r; ?>
                        </td>
                        <?php endforeach; ?>
                </tr>
                <?php endforeach; ?>
        </table>
    </div>
</div>
<?php include"view/bottom.php"; ?>
