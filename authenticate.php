<?php
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

    $stored_username = "Julianwoo";
    $stored_password = "Wachtwoord123";
        //rkPjNnb7uLMuRkskvwKF


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


?>