const url="http://localhost:2047/backend";
function GetTopItems(){
    var req=new XMLHttpRequest();
    req.open("POST",url,false);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    req.send("mode=t&code="+Math.random());
    console.log(req.responseText);
}