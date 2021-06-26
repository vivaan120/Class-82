var mouseEvent= "empty";
var lastpositionof_x,lastpositionof_y;
var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color= "red";
var width_of_the_line= 1; 
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent= "mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_positionofmouse_x= e.clientX - canvas.offsetLeft;
    current_positionofmouse_y= e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_the_line;
        console.log("last position of x and y coordinates = ");
        console.log("x= "+ lastpositionof_x+ "y= "+lastpositionof_y);
        ctx.moveTo(lastpositionof_x,lastpositionof_y);
        console.log("current position of x and y coordinates = ");
        console.log("x= "+ current_positionofmouse_x+ "y= "+current_positionofmouse_y);
        ctx.lineTo(current_positionofmouse_x,current_positionofmouse_y);
        ctx.stroke();
    }
    lastpositionof_x=current_positionofmouse_x;
    lastpositionof_y=current_positionofmouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}