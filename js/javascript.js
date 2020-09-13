var user;
var con;		
var ListaUsuarios = []; 

		
function logueo() {
    var usuario = document.login.usuario.value
    var password = document.login.password.value
    var usuarioEncontrado =false;
    ListaUsuarios.forEach(usuarioIterado => {
       
        if (usuarioIterado.user == usuario && usuarioIterado.con == password) {
            window.location = "https://www.google.com/"
             usuarioEncontrado =true;
        }
    });
        if (usuarioEncontrado == false) {

            alert("Error usuario o contraseña incorrectos");
        }
    
}


function reg() {
    var nuevoUsuario = new Object();
    nuevoUsuario.user = document.registro.userreg.value;
    nuevoUsuario.con = document.registro.conreg.value;
    ListaUsuarios.push(nuevoUsuario)
    
    document.getElementById("user1").value="";
    document.getElementById("pas").value="";
    document.getElementById("mail").value="";
    document.getElementById("tel").value="";
}


