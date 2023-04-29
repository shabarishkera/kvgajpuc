var isopen=false;
var navdropbox=document.getElementById("dl-menu");

function togglenav()
{
if(isopen)
{
navdropbox.setAttribute('class',"dl-menu");
isopen=false
}
else
{
navdropbox.setAttribute('class',"dl-menu dl-menuopen");
isopen=true;
}


}