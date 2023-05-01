function start()
{
    alert("start enabled");
    document.getElementById("startbutton").disabled = true; //turns off start
    document.getElementById("stopbutton").disabled = false;  // turns on stop
}

function stop()
{
    alert("stop enabled");
    document.getElementById("startbutton").disabled = false; //turns off start
    document.getElementById("stopbutton").disabled = true;  // turns on stop
}
