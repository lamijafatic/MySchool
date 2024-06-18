<?php
if (isset($_POST["submit"])) {
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["dokument"]["name"]);
  if (move_uploaded_file($_FILES["dokument"]["tmp_name"], $target_file)) {
    echo "Datoteka " . htmlspecialchars(basename($_FILES["dokument"]["name"])) . " je uspješno uploadovana.";
  } else {
    echo "Dogodila se greška prilikom uploada datoteke.";
  }
}

?>