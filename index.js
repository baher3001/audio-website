var aa = document.querySelector('.workers .container');
var bb = document.querySelector('.cars .container') 
var inputs= document.querySelectorAll('.form-control'); 
var icons=document.querySelectorAll('i');
window.onscroll = function()
{
    if(document.body.scrollTop>300)
    {
        aa.classList.add('animate__backInUp');
    }
    
} 
window.onscroll = function()
{
    if(document.body.scrollTop>400)
    {
        bb.classList.add('animate__backInLeft');
    }
    
} 
 
for(var i=0; i<inputs.length;i++)
{
    inputs[i].onblur = function(e)
    {
        if(e.target.value.length<3)
        {
            e.target.nextElementSibling.style.display="block";
        }
        else
        {
            e.target.nextElementSibling.style.display="none";
        }
    }
}
icons[0].onclick = function()
{
    icons[0].style.display="none";
    icons[1].style.display="block";
    inputs[1].type = "text";
}
icons[1].onclick = function()
{
    icons[1].style.display="none";
    icons[0].style.display="block";
    inputs[1].type = "password";
}