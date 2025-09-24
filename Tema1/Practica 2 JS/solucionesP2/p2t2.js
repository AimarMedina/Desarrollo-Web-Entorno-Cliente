// Validador de usuario y contraseña.

// "Base de datos"
let usuarios = new Map();

usuarios.set("user1","12345Abcde");
usuarios.set("user2","12345aBcde");
usuarios.set("user3","12345abCde");
usuarios.set("user4","12345abcDe");

// Programa

// Variables globales
var username, contrasenna;

try
{
    username=prompt("Teclea el nombre de usuario","Dwec01");
    registrarUsuario();
} 
catch (error) 
{
    alert(error);
}

function registrarUsuario()
{   
    // Función con try
    try 
    {
        // Validar el nombre de usuario
        if (validarUsuario())
        {
              contrasenna = prompt("Teclea la contraseña");
               // Validar contraseña
               if (validarContrasenna())
               {
                   // Buscar en la "base de datos" cuando el usarname y la contraseña es correcta.
                   buscar();
               }
       }
    } catch (error) {
        alert(error);
    }
}

function validarUsuario()
{
    // entre 4 y 10 caracteres y que solo contenga letras y números
    try 
    {
        const regexUsername = /^[A-Za-z0-9]{4,10}$/;
        if (!regexUsername.test(username)) {
            throw new Error("El nombre de usuario debe tener entre 4 y 10 caracteres y solo contener letras y números.");
        }
        return true;
    } 
    catch (error) 
    {
        alert(error);
        return false;
    }
}

function validarContrasenna()
{
    // Debe tener al menos 8 caracteres, debe contener al menos una letra mayúscula, una minúscula y un número
    // Sin try -- v
    const regexContrasenna = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //alert(contrasenna);
    if (!regexContrasenna.test(contrasenna))
    {
        // Se relanza
        throw new Error("La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula y un número.");
    }
    return true;
    /*
    Explicación de la expresión regular:
    

        (?=.*[a-z]) Este es un lookahead positivo. Un lookahead se asegura de que en algún lugar de la cadena haya
        al menos un carácter que cumpla con una condición, pero sin consumir el carácter (es decir, no lo "consume" ni lo captura, solo lo verifica).
        .* significa "cualquier carácter" (el punto es "cualquier carácter" y el asterisco es "cero o más veces").
        [a-z] significa "cualquier letra minúscula" entre 'a' y 'z'.
        En resumen, (?=.*[a-z]) asegura que la cadena contenga al menos una letra minúscula.

        (?=.*[A-Z]) asegura que la cadena contenga al menos una mayúscula.
        
        (?=.*\d) asegura que la cadena contenga al menos un número.


    Esta parte define el contenido real de la cadena después de las verificaciones de lookahead.
    [A-Za-z\d] es un conjunto de caracteres que permite:
    Letras mayúsculas (A-Z)
    Letras minúsculas (a-z)
    Números (\d, equivalente a [0-9]).
    {8,}: Esto indica que debe haber al menos 8 caracteres o más. No hay un límite superior, pero la longitud mínima es de 8.
    
    */
}

function buscar()
{
    // Función sin try
    if (usuarios.has(username))
    {
        if (usuarios.get(username)!== contrasenna)
            throw Error("Usuario y/o contraseña no valido");
        // else
        alert("Bienvenidx");
    }
    else
        throw Error("Usuario y/o contraseña no valido");
}

