<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="dokument.css">
	<title>My Documents</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
	<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>	
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="documents.css">
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
           <a href="index.html">
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
			<a href="documents.php">
			 <i class='bx bx-file'></i>
			 <span class="links_name">My Documents</span>
			</a>
			<span class="tooltip">My Documents</span>
		  </li>
         
        </ul>
      
          <div class="user">
           
           
          </div>
        </div>
     
      <div class="home_content">
               
                     <div class="naslovv">
                        <span id="my">My</span><span id="notesid">Documents</span>
                      </div>
                      <br>
                      <span id="clicking">Upload files from your device(jpg,jpeg,doc,docx,pg,pdf,txt)</span>
                      <br>
                      <br><br><br>
                         
<form action="" method="POST" enctype="multipart/form-data">
	<label id="labela" for="file">Choose your file:</label>
	<input id="upload" type="file" name="file" id="file">
	<input id="submit_dugme" type="submit" name="submit" value="Upload">
	
</form>
<h2 id="uploaded">Uploaded files:</h2>
 <div class="formica">

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
	       /* echo "Datoteka ". basename( $_FILES["file"]["name"]). " je uspješno uploadovana.<br>";*/
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
            echo "<li><a href='uploads/$entry' target='_blank'>$entry</a> <button onclick='deleteFile(\"$entry\")'class='dugmence'>Delete</button></li>";
        }
    }
    echo "</ul>";
    closedir($handle);
}





?>
 <div class="knjizurine">
         
         
     </div>
     </div>   
    
                    
                    
                    
                    
              

              </div>
              
   <script src="main.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>      

<script>
$(document).ready(function(){
	$("div.myDiv").hide();
    $('#razredi').on('change', function(){
    	var demovalue = $(this).val(); 
        $("div.myDiv").hide();
		$("#Showpeti").hide();
        $("#Show"+demovalue).show();
    });
});


function deleteFile(filename) {
  if (confirm("Are you sure you want to delete this file?")) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "delete_file.php?filename=" + encodeURIComponent(filename), true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
        // Osvježi listu uploadovanih fajlova nakon brisanja
        location.reload();
      }
    };
    xhr.send();
  }
}

</script> 






</body>
</html>