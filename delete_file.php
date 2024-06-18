<?php
$target_dir = "uploads/";

if (isset($_GET['filename'])) {
  $filename = $_GET['filename'];
  $file_path = $target_dir . $filename;
  
  if (is_file($file_path)) {
    if (unlink($file_path)) {
      echo "File successfully deleted.";
    } else {
      echo "Error deleting the file.";
    }
  } else {
    echo "Invalid file path.";
  }
} else {
  echo "Filename parameter is missing.";
}
?>


