const url="http://localhost:2047/items";
function GetTopItems(){
    var req=new XMLHttpRequest();
    req.open("POST",url,false);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    req.send("mode=t&code="+Math.random());
    console.log(req.responseText);
}
function GetLeftItems(path){
    var req=new XMLHttpRequest();
    req.open("POST",url,false);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    req.send("mode=l&path=" + path + "&code="+Math.random());
    console.log(req.responseText);
}