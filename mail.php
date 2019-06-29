<?php
    $destino = "contacto@alicode.com.mx";
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $tel = $_POST["telefono"];
    $email = $_POST["mail"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    echo $nombre." ".$email." ".$tel." ".$mensaje;
    $contenido = "Nombre: ".$nombre."\nApellidos: ".$apellidos."\nTelefono:".$tel."\nE-mail: ".$email."\nAsunto: ".$asunto."\nMensaje: ".$mensaje;
    mail($destino,"Contacto Alicode",$contenido);
    header("Location:index.html");
?>