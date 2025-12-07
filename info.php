<?php
$etablissement = "Université Cade Ayyad";
$module = "Développement Web";
$annee = 2025;

$nombre1 = 8;
$nombre2 = 4;

$addition = $nombre1 + $nombre2;
$multiplication = $nombre1 * $nombre2;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Info PHP - TP6</title>
    <style>
        body {
            font-family: Arial;
            background: #fafafa;
            margin: 40px;
        }
        .box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>

<div class="box">
    <h1>Informations PHP</h1>

    <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>

    <h3>Variables numériques</h3>
    <p>Nombre 1 : <?php echo $nombre1; ?></p>
    <p>Nombre 2 : <?php echo $nombre2; ?></p>

    <h3>Résultats</h3>
    <p>Addition : <?php echo $addition; ?></p>
    <p>Multiplication : <?php echo $multiplication; ?></p>
</div>

</body>
</html>
