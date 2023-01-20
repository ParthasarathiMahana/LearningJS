function outer()
{
    console.log(10);
    function inner()
    {
        console.log(20);
    }
    return inner;
}
var inner = outer();
inner();

var btn = document.getElementById("btn");
var right;
function shift()
{
    if(right == true)
    {
        btn.style.left = "2px";
        right = false;
        document.body.style.backgroundColor = "white";
        document.getElementById("text").style.color = "black";
    }
    else{
        btn.style.left = "41px";
        right =true;
        document.body.style.backgroundColor = "black";
        document.getElementById("text").style.color = "white";
    }
}
btn.addEventListener("click", shift);
