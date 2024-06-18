<!DOCTYPE html>
<html>
<head>
	<title>Upload datoteka</title>
</head>
<body>

	<h2>Upload datoteka</h2>

	<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST" enctype="multipart/form-data">
	  <input type="file" name="fileToUpload" id="fileToUpload">
	  <input type="submit" value="Upload" name="submit">
	</form>

	<?php
	$target_dir = "uploads/"; // odredišni direktorij za upload datoteka
	$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

	// Provjeri postoji li datoteka već na serveru
	if (file_exists($target_file)) {
	    echo "Sorry, file already exists.";
	    $uploadOk = 0;
	}

	// Provjeri veličinu datoteke
	if ($_FILES["fileToUpload"]["size"] > 5000000) {
	    echo "Sorry, your file is too large.";
	    $uploadOk = 0;
	}

	// Dozvoli samo određene formate datoteka
	if($imageFileType != "pdf" && $imageFileType != "docx" && $imageFileType != "doc" ) {
	    echo "Sorry, only PDF, DOC, and DOCX files are allowed.";
	    $uploadOk = 0;
	}

	// Ako se dogodi neka greška, prekini upload
	if ($uploadOk == 0) {
	    echo "Sorry, your file was not uploaded.";
	// Ako je sve u redu, spremi datoteku na server
	} else {
	    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
	        echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
	    } else {
	        echo "Sorry, there was an error uploading your file.";
	    }
	}

	// Prikazivanje liste uploadanih datoteka
	$dir = "uploads/";
	$files = scandir($dir);
	echo "<ul>";
	foreach ($files as $file) {
	  if ($file !== '.' && $file !== '..') {
	    echo "<li><a href=\"uploads/$file\" target=\"_blank\">$file</a></li>";
	  }
	}
	echo "</ul>";
	?>

</body>
</html>
