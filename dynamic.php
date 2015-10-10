<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Budget Book Scanning - From Books to Bytes" />
	<meta name="keywords" content="Budget Book Scanning offers an easy, low cost alternative for your book conversion and digitization needs." />
	<meta name="author" content="Codrops" />
	<link rel="shortcut icon" href="../favicon.ico">
        <title><?php echo $_REQUEST['title']; ?> <?php echo $_REQUEST['name']; ?></title>
	<link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
<style>
.bio{
padding-left:200px;
width:600px;
}
</style>
</head>
<body>
<div class="bio">
<h1><?php echo $_REQUEST['title']; ?> <?php echo $_REQUEST['name']; ?></h1>
<img src="<?php echo $_REQUEST['image']; ?>" width="150px" height="200px"/>
<p>Name : <?php echo $_REQUEST['name']; ?><p>
<p>Born : <?php echo $_REQUEST['born']; ?><p>
<p>Country : <?php echo $_REQUEST['country']; ?><p>
<p>Short biography : </p>
<p><?php echo $_REQUEST['desc']; ?><p>
</div>
</body>
</html>