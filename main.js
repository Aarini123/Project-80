var inputs=[];
function getparagraph1() {
    for (var i=1; i<=6; i++)
    {
        inputs.push(document.getElementById("para" + i).value);
        inputs.join(". ")
        document.getElementById("blankdiv").innerHTML=inputs.join(". ");
       
    }
}

var inputs2=[];
function getparagraph2() {
    for (var a=1; a<=6; a++)
    {
        inputs2.push(document.getElementById("parabox_" + a).value);
        inputs2.join(". ")
        document.getElementById("blankdiv2").innerHTML=inputs2.join(". ");
       
    }
}

