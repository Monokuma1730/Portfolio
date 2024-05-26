function AbrirAlerta(){
    Swal.fire({
        title: "Não saia apertando botões.",
        text: "Tome cuidado e se isso fosse um botão de explodir o computador?",
        icon: "warning"
      });
}

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == 'batman' && senha =='coringa'){
        Swal.fire({
            title: "Parabéns, você solucionou a senha.",
            text: "Seja bem vindo ao Batcomputador",
            icon: "success"
          })
          location.href = "https://youtu.be/l04_GGlr3BI?si=mmb12Wg0h0koJ6qw"
    }   else{
        Swal.fire({
            title: "Meh, não foi dessa vez!",
            text: "Para te ajudar, login: batman e senha: coringa ^-^",
            icon: "error"
          });
    }

}

    
 