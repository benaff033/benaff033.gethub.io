// Select color input
var color;
// Select size input
var  height, width;
// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(doSomething){
    doSomething.preventDefault();
    height = $('#inputHeight').val();    
    width = $("#inputWeight").val();
    makeGrid(height, width);    
});
    
function makeGrid(a, b) {
// Your code goes here!
    for(var i = 1; i <= a; i++){
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var x = 1; x <= b; x++ ){
            $("#table" + i).append('<td></td>');
        }
  }
    
    $("td").click(function addColor(){
        color = $("#colorPicker").val();
        $(this).attr('style', 'background-color:' + color);
    });

}
