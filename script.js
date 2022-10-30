function printName(arg) {
    //const names=["AAA","BBB","CCC"];
    var name = "LaxmiNarayan";
    if (arg == 'name') {
        console.log("Currentelly in name condition");
        document.getElementById('name').innerHTML = name;
        document.getElementById('size').innerHTML = name.length;
        //names[0]+"<br/>"+names[1]+"<br/>"+names[2];

    }
    if (arg == 'age') {
        console.log("Currentelly in age condition");
        //document.getElementById('age').innerHTML='25';
        this.innerHTML = '25';
    }
    if (arg == 'gender') {
        console.log("Currentelly in gender condition");
        document.getElementById('gender').innerHTML = 'Male';
    }
    if (arg == 'description') {
        console.log("Currentelly in description condition");
        document.getElementById('description').innerHTML = 'It\'s alright.';
    }
    if (arg == 'print') {
        window.print();
    }
}
function getMyDetail() {
    document.getElementById('name').innerHTML = 'Mr.lax!';
    document.getElementById('age').innerHTML = '25';
    document.getElementById('gender').innerHTML = 'Male';

}
function getName() {
    log.console(names[0] + "<br/>" + names[1] + "<br/>" + names[2]);
}
function getFullName(name) {
    document.getElementById('fullName').innerHTML = name.firstName + " " + name.lastName;
}

function printFullName(fName,lName){
    document.getElementById('fullName2').innerHTML=`Hey! This is ${fName} ${lName}`;
}

function printOption(num){
    var htmlOutPut="Index: <select>";
    for(var a=1;a<=num;a++){
        htmlOutPut += `<option>${a}</option>`;
    }
    htmlOutPut += "</select>";
    document.getElementById('dynHTMLOutPut').innerHTML=htmlOutPut;
}

function mySort(){
    window.open();
    const numArray=[43,100,6,10,23];
    try {
        numArray.sort(function(a,b){
            return b-a
        }); 
    } catch (error) {
        console.log("You have an error");
    }
    

    var len=numArray.length;
    var max=-Infinity;
    while (len--) {
        if(numArray[len]>max){
            max=numArray[len];
        }
    }
    var len1=numArray.length;
    var min=Infinity;
    for(let i=len1-1;i>=0;i--){
        if(numArray[i] < min){
            min=numArray[i];
        }      
    }
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ];

      cars.sort(function(a,b){return a.type-b.type});


    document.getElementById("mySortArray").innerHTML= cars[0].type;

    
}