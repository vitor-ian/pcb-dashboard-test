var senha = $('#pass');
var olho= $("#show-password");

olho.mousedown(function() {
  senha.attr("type", "text");
});

olho.mouseup(function() {
  senha.attr("type", "password");
});

$( "#olho" ).mouseout(function() { 
    $("#senha").attr("type", "password");
});