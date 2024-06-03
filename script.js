function fun()
{
    let text="";
    let arr=["cat","dog","rabbit"]
    for(let i=0;i<arr.length;i++)
    {
        text+="<tr><td>"+arr[i]+"</tr></td>";
    }
    document.getElementById("t1").innerHTML=text;
}
function fun2()
{
    if(document.getElementById("cs").value=="python")
    {
        document.getElementById("pass").style.visibility="hidden";
    }
}