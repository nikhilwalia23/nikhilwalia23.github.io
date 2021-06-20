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
}
function close()
{
    // var ele=document.getElementsByClassName("close");
    // for(item of ele)
    // {
    //     item.style.display="none";
    // }
    // var ele=document.getElementsByClassName("open");
    // for(item of ele)
    // {
    //     item.style.display="block";
    //     console.log(item);
    // }
}