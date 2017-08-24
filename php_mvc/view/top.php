<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Seforim</title>

        <link href="/bootstrap-3.3.6/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <style>
        body {
            text-transform: capitalize;
            padding-top: 50px;
        }

        <?php if (!empty($style))
            echo "$style";
        ?>

    </style>

    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php">Home</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><a href="index.php?action=select">Select </a></li>
<?php if (!empty($_SESSION['admin'])): ?>
                            <li><a href="index.php?action=insert">Insert </a></li>
                            <li><a href="index.php?action=delete">Delete </a></li>
                            <li><a href="index.php?action=update">Update </a></li>
                            <li><a href="index.php?action=logOut">log Out </a></li>
<?php else : echo '<li><a href="index.php?action=admin">Admin</a></li>';
endif; ?> 
                    </ul>
                </div>
            </div>
        </nav>
        <div class="jumbotron text-center">
            <div class="container">
                <h1>Pcs stuff</h1>
            </div>
        </div>
