<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Kamil Gotowski">
    <meta name="title" content="Muzyczky">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lulkownia - Muzyka</title>	
	<link rel="stylesheet" href="styles-header.css">
    <link rel="stylesheet" href="styles.css"> 
<img src="https://i.imgur.com/ccDC31u.jpeg" class="background-image">
</head>
<body>


    <?php include 'header.php'; ?>
    
    <div class="music-grid" id="musicGrid">
        <?php include 'music-tiles.php'; ?>
    </div>
    
    <?php include 'footer.php'; ?>
    
    <script src="script.js"></script>
</body>
</html>
