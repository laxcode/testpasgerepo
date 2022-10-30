function getMyLength(stringValue){
    console.log(document.getElementById('inputValue').value.length);
    document.getElementById('lengthNum').innerHTML=stringValue.length;
}
function sliceForMe(stringValue,startIndex,endIndex){
    
    document.getElementById('sliceForme').innerHTML=stringValue.slice(startIndex,endIndex);
}
