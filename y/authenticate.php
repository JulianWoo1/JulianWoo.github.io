
*/
<?php
session_start();


if($_SERVER["REQUEST_METHOD"] == "POST"){

    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = $_POST["password"];

    $stored_username = "Julianwoo";
    $stored_password = "Wachtwoord123";

    if(empty($username) || empty($password)){
        echo "please enter your username.d";
        exit();
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);


    if($username === $stored_username && $password === $stored_password){
        $_SESSION["usename"] = $username;
        $_SESSION ["loggedin"] = true;
        
        header('Location: portfolio.html');
    } else {
        echo "invalid username or password";
        exit();
    } 
}

if($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    $password = $_POST["password"];

    require_once("inc/dbconnect_inc.php");

    $stmt = $dbHandler->prepare("SELECT email, password FROM `administrators` WHERE email = :email");
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute(); 
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if($user && password_verify($password, $user["password"])) {
        $_SESSION['email'] = $user['email'];
        header('Location: products.php');
        exit();
    } else {
        $error = "Invalid email or password.";
    }
}

$dbHandler = null;

?>
