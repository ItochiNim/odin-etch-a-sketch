const pixels = 16;
const gridPixels = Math.pow(pixels,2);

//title Creation
var title = document.createElement('h1');
title.innerText = 'ETCH N SKETCH';
title.style.textAlign = 'center';
document.body.appendChild(title);

//container div to frame the 16x16 grid
var container = document.createElement('div');
container.style.display = 'grid';
container.style.gridTemplateColumns=`repeat(${pixels},auto)`;
container.style.border = "1px solid black";
container.style.minHeight = '300px';
container.style.minWidth = '300px';
container.style.width = '50%';
container.style.aspectRatio = '1';
container.style.margin = 'auto';
document.body.appendChild(container);  
container.id = 'container';

//create all the divs inside the grid.
for(i=0;i<gridPixels;i++)
 {
  var div = document.createElement('div');
  div.style.border = "0px solid black";
  div.className = 'pixel';
  div.style.minHeight='auto';
  div.style.minWidth='auto';
  div.style.aspectRatio = '1';
  document.getElementById('container').appendChild(div);
}

//Solution step 1
/* document.addEventListener('mousemove', function(e) {
  //console.log(document.elementFromPoint(e.pageX, e.pageY));
  var element = document.elementFromPoint(e.pageX, e.pageY);
  if(element.className == 'pixel')
  element.style.background = 'black';
}*/

//Solution step 2 paint div on click
/* document.addEventListener('mousedown', function(e){
  var element = document.querySelector('div.pixel:hover');
  console.log(element);
  if(element.className == 'pixel')
  element.style.background = 'black';
} */

//Solution step 3 paint div while holding click
document.addEventListener('mousemove', function(event) {
  if(event.buttons == 1) {

   var element = document.querySelector('div.pixel:hover');
   //console.log(element);

   if(element.className == 'pixel')
   element.style.background = 'black';

   event.preventDefault();
  }
 }
 
)