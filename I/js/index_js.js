

var PromtInfo = prompt("Write nums for add(math). For split, use (_space_)\nIt's just for fun.");

if(PromtInfo){
    console.error(PromtInfo);

    document.getElementById("Res").innerHTML =  Number( PromtInfo.split(' ')[0]) + Number( PromtInfo.split(' ')[1]);
    console.log(Number( PromtInfo.split(' ')[0]) + Number( PromtInfo.split(' ')[1]));
}
else{
    alert("Promt is null");
    document.getElementById("Res").innerHTML = "Numbers was't entered";
}