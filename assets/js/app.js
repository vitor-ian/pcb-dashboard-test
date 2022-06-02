//cartao
var cartao = document.getElementById("cartao");
var nome_cartao = document.getElementById("nome-do-cartao");

//user
var user_cripto = localStorage.getItem("user");
if(user_cripto == null){
    window.location.href = "login.html"
}
var user = atob(user_cripto);
var user_obj = JSON.parse(user);

$(".user-nome").html(user_obj.nick);
$(".user-cargo").html(user_obj.cargo);
$(".user-data").html(user_obj.data);



//trocar cards
//basic
document.getElementById("basic").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box');
    $(nome_cartao).html("Basic");
});
//gold
document.getElementById("gold").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box cartao-gold');
    $(nome_cartao).html("Gold");
});
//platinum
document.getElementById("platinum").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box cartao-platinum');
    $(nome_cartao).html("Platinum");
});
//premium
document.getElementById("premium").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box cartao-premium');
    $(nome_cartao).html("Premium");
});
