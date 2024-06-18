<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="upload.css">
	<title>MyDocuments</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
	<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>	
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div class="stranica">
<div class="header">
   
    <div id="slika1">
                <img src="logo2.png" id="slika">
    </div>
	<p class="hop"><span>MY</span><span id="s">S</span><span>CHOOL</span></p>


</div>

    </div>
    <div class="sidebar">
        <div class="logo_content">
          <div class="logo">
            <div class="logo_name">Welcome!</div>
          </div>
          <i class='bx bx-menu' id="btn"></i>
        </div>
        <ul class="nav_list">
          <li>
             <img src="zvezda.png" id="ikonica" alt="ikona">
           
          </li>
          <li>
           <a href="projekat.html">
            <i class='bx bx-home'></i>
            <span class="links_name">Home</span>
           </a>
           <span class="tooltip">Home</span>
         </li>
          <li>
            <a href="grades.html">
             <i class='bx bx-medal'></i>
             <span class="links_name">Grades</span>
            </a>
            <span class="tooltip">Grades</span>
          </li>
          <li>
           <a href="exams.html">
            <i class='bx bx-task'></i>
            <span class="links_name">Exams</span>
           </a>
           <span class="tooltip">Exams</span>
         </li>
         <li>
           <a href="notes.html">
            <i class='bx bx-note'></i>
            <span class="links_name">Notes</span>
           </a>
           <span class="tooltip">Notes</span>
         </li>
         <li>
           <a href="timetable.html">
            <i class='bx bx-calendar'></i>
            <span class="links_name">Timetable</span>
           </a>
           <span class="tooltip">Timetable</span>
         </li>
         <li>
			<a href="mydocuments.php">
			 <i class='bx bx-file'></i>
			 <span class="links_name">My Documents</span>
			</a>
			<span class="tooltip">My Documents</span>
		  </li>
         
        </ul>
      
          <div class="user">
           
           
          </div>
        </div>
     <div class="dokumenta">  
     <h2>Upload datoteke</h2>
<form action="" method="POST" enctype="multipart/form-data">
	<label for="file">Odaberite datoteku:</label>
	<input type="file" name="file" id="file"><br><br>
	<input type="submit" name="submit" value="Upload">
</form>

<h2>Popis uploadovanih datoteka</h2>
     <?php
// Odredišni direktorij za upload
$target_dir = "uploads/";

// Provjeri da li postoji direktorij za upload, ako ne postoji, kreiraj ga
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

// Provjeri da li je datoteka uspješno uploadovana
if(isset($_FILES["file"]["name"])){
	$target_file = $target_dir . basename($_FILES["file"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	if(isset($_POST["submit"])) {
	    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
	        echo "Datoteka ". basename( $_FILES["file"]["name"]). " je uspješno uploadovana.<br>";
	    } else {
	        echo "Došlo je do greške prilikom uploadovanja datoteke.<br>";
	    }
	}
}

// Prikaz popisa uploadovanih datoteka
if ($handle = opendir($target_dir)) {
    echo "<ul>";
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
            echo "<li><a href='uploads/$entry' target='_blank'>$entry</a></li>";
        }
    }
    echo "</ul>";
    closedir($handle);
}
?>

     
     
     
     </div>
     
      






</body>
</html>
















