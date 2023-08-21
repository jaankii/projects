


bars = document.getElementById ('bars'); 
nav = document.getElementById ('nav'); 



// bars.addEventLister('onclick',test)
bars.addEventListener("click",test)

function test()
{
   nav.classList.toggle("navfun");
}