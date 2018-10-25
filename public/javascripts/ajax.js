var _id = 0;
var addPedido = function(id){
  $.ajax( "/produto/ajax/"+id+"/addPedido").done(function(dados) {
    console.log(dados[0].nome);
    var quantidade = document.getElementById('qtd').value;
   	$("#produtoList").append("<tr><td name='tdid"+_id+"'>"+dados[0].id+"</td><td name='tdnome"+_id+"'>"+dados[0].nome+"</td><td name='tdcor"+_id+"'>"+dados[0].cor+"</td><td name='tdqtd"+_id+"'>"+quantidade+"</td></tr>");
    $("#form_cad_pedido").append("<input type='hidden' name='id"+_id+"' value='"+dados[0].id+"'>");
    $("#form_cad_pedido").append("<input type='hidden' name='qtd"+_id+"' value='"+quantidade+"'>");
    _id++;
    $("#qtdRows").val(""+_id+"");
    console.log(_id);
    console.log(parseInt(document.getElementById("qtdRows").value));
  });
};
