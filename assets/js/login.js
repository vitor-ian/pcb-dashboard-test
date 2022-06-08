var imported = document.createElement('script');
imported.src = '/assets/js/password.js';
document.head.appendChild(imported); 

localStorage.clear();

let users = [
    {id: 1, nick: 'Nairo', fist_name: "Vítor Ian", name: 'nairo', senha: "123", titulo: "Admin", insignia: "1", data: "01/01/2016"},
    {id: 2, nick: 'Sde', fist_name: "Edson Barbosa", name: 'saudades', senha: "123", titulo: "Cearense", insignia: "1", data: "01/01/2016"},
    {id: 3, nick: 'DominouSX', fist_name: "Washington Araujo", name: 'xitao', senha: "123", titulo: "O Canalha", insignia: "1", data: "01/01/2016"},
    {id: 4, nick: 'Baiano', fist_name: "Matheus Souza", name: 'baiano', senha: "123", titulo: "Cê não ta entendendo", insignia: "1", data: "01/01/2018"},
    {id: 5, nick: 'Dersin', fist_name: "Wederson", name: 'dersin', senha: "123", titulo: "Chamber", insignia: "1", data: "01/01/2016"},
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
        $('#alertas').html("<div class='alert alert-danger alert-dismissible fade show'>Usuário não encontrado, entre em contato com o administrador.<button type='button' class='btn-close' data-bs-dismiss='alert'></button></div>"); 
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



