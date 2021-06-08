function show() {
    var ele=document.getElementsByClassName("navele");
    for(var i=0;i<ele.length;i++)
    {
        ele[i].style.display="block";
    }
    document.getElementById('nik').style.display="none";
}