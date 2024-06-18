<?php
// Spajanje na bazu podataka
$servername = "localhost";
$username = "id20554575_lamija";
$password = "u{PuFobR9n/O(|aO";
$dbname = "id20554575_moja_baza";

$conn = new mysqli($servername, $username, $password, $dbname);



// Provjera povezivanja
if ($conn->connect_error) {
  die("Povezivanje neuspjelo: " . $conn->connect_error);
}

// Spremanje podataka u bazu podataka
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $tekst = $_POST["tekst"];

  $sql = "INSERT INTO moja_tabela (tekst) VALUES ('$tekst')";

  if ($conn->query($sql) === TRUE) {
    // Redirect na istu stranicu kako bi se prikazao ažurirani input polje
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
  } else {
    echo "Greška: " . $sql . "<br>" . $conn->error;
  }
}

// Dohvaćanje podataka iz baze podataka i prikaz u input polju
$sql = "SELECT tekst FROM moja_tabela ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $tekst = $row["tekst"];
} else {
  $tekst = "";
}

$conn->close();
?>

<!-- Prikazivanje input polja sa spremljenim tekstom -->
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  <label>Unesite tekst:</label>
  <input type="text" name="tekst" id="tekst" value="<?php echo $tekst; ?>">
  <input type="submit" value="Spremi">
</form>