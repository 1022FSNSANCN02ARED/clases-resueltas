//variable "perfil" que puede adoptar los valores
// "administrador", "asistente" o "invitado"
const perfil = "ADMINISTRADOR";

switch (perfil) {
  //En caso de que sea un valor vacío, imprimir
  // "Debe especificar el perfil del usuario".
  // ¿Qué pasa si viene "lleno" de espacios?
  // ¿Es vacío si viene null, y undefined?
  case "": {
    console.log("Debe especificar el perfil del usuario");
    break;
  }
  //En caso de que sea administrador, imprimir
  // "Usted tiene todos los privilegios de uso del sistema"
  // ¿qué pasa si administrador tiene mayúsculas?
  case "ADMINISTRADOR":
  case "Administrador":
  case "administrador": {
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
  }
  //En caso de que sea asistente, imprimir
  // "Usted sólo tiene permisos de registrar, modificar y consultar datos.""
  case "ASISTENTE":
  case "Asistente":
  case "asistente": {
    console.log(
      "Usted sólo tiene permisos de registrar, modificar y consultar datos."
    );
    break;
  }
  //En caso de que sea invitado, imprimir
  // "Usted sólo tiene permisos de consultar datos"
  case "INVITADO":
  case "Invitado":
  case "invitado": {
    console.log("Usted sólo tiene permisos de consultar datos");
    break;
  }
  // Si no es ninguno de los anteriores, imprimir
  // "Debe especificar un perfil válido".
  default: {
    console.log("Debe especificar un perfil válido");
  }
}
