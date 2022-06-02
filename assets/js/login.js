var imported = document.createElement('script');
imported.src = '/assets/js/password.js';
document.head.appendChild(imported); 

localStorage.clear();

let users = [
    {id: 1, nick: 'Nairo', name: 'nairo', senha: "123", cargo: "Administrador", medalha: "1", data: "01/06/2022"},
    {id: 2, nick: 'Baiano', name: 'baiano', senha: "123", cargo: "Membro", medalha: "1", data: "02/06/2022"},
    {id: 3, nick: 'DominouSX', name: 'xitao', senha: "123", cargo: "Moderador", medalha: "1", data: "02/06/2022"},
];

function login(){
    var username = document.getElementById("user").value;
    var senha = document.getElementById("pass").value;

    function searchUser(user) {
        return user.name === username;
    }

    var resposta = users.find(searchUser);

    if(resposta !== undefined){
        if(resposta.name == username && resposta.senha == senha){
            var resposta_string = JSON.stringify(resposta);
            var user = btoa(resposta_string);
            localStorage.setItem("user", user);

            window.location.href = "index.html"
        }
        else{
            $('#alertas').html("<div class='alert alert-danger alert-dismissible fade show'>Usuário ou senha incorretos.<button type='button' class='btn-close' data-bs-dismiss='alert'></button></div>"); 
            timeOut();
        }
        
    }
    else{
        $('#alertas').html("<div class='alert alert-danger alert-dismissible fade show'>Ocorreu um erro, entre em contato com o administrador.<button type='button' class='btn-close' data-bs-dismiss='alert'></button></div>"); 
        timeOut();
    }
    
}

function timeOut(){
    setTimeout(function(){
        $(".alert").fadeOut("slow", function(){
            $(this).alert("close");
        })

    }, 6000);
}



