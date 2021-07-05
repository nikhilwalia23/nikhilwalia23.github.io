function show()
{
    var ele=document.getElementsByClassName("open");
    for(item of ele)
    {
        item.style.display="none";
    }
    var ele=document.getElementsByClassName("close");
    for(item of ele)
    {
        item.style.display="block";
    }
    var ele=document.getElementsByClassName("nav-content");
    ele[0].style.visibility="visible";
}
function hide()
{
    var ele=document.getElementsByClassName("close");
    for(item of ele)
    {
        item.style.display="none";
    }
    var ele=document.getElementsByClassName("open");
    for(item of ele)
    {
        item.style.display="block";
    }
    var ele=document.getElementsByClassName("nav-content");
    ele[0].style.visibility="hidden";
}
//Under Construction Alert
function construction()
{
    alert("Under Contruction");
}
var canves=document.getElementById("starfield");
canves.width=window.innerWidth-30;
canves.height=window.innerHeight-10;

  
