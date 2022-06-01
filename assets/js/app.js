var menu = document.getElementById("ct-menu");
var cartao = document.getElementById("cartao");
var nome = document.getElementById("nome-do-cartao");

//abrir menu
$("#abrir-menu").click(function(){
    $("#menu-lat").animate({left: '0px'});
});

//fechar menu
$("#fechar-menu").click(function(){
    $("#menu-lat").animate({left: '-400px'});
});



//cards
//basic
document.getElementById("basic").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box');
    $(nome).html("Basic");
});
//gold
document.getElementById("gold").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box cartao-gold');
    $(nome).html("Gold");
});
//platinum
document.getElementById("platinum").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box cartao-platinum');
    $(nome).html("Platinum");
});
//premium
document.getElementById("premium").addEventListener("click", function() {
    $(cartao).removeClass();
    $(cartao).addClass('cartao box cartao-premium');
    $(nome).html("Premium");
});
