const divContain = document.querySelector('#divContainer');



function createDiv(number,x,y){
    for(let i=0;i<number;i++){
    var newDiv = document.createElement('div');
    newDiv.setAttribute('style','width:'+x+'px; height:'+y+'px;');
    divContain.appendChild(newDiv);
}
}

function addDiv(number){
    switch(number){
        case 16:
            createDiv(1,600,600);
            //set style attributes

            break;
        
        case 32:
            createDiv(36,100,100);

            break;
        case 48:
            createDiv(48);
            //set style attributes
            break;
        
        case 64:
            createDiv(64);
            break;       
        case 80:
            createDiv(80);
            //set style attributes
            break;
        
        case 96:
            createDiv(96);
            break;
        case 112:
            createDiv(112);
            break;  

        case 128:
            createDiv(128);
            break;    

    }

}


function removeDiv(){
    while(divContain.firstChild){
        divContain.removeChild(divContain.firstChild);
    }
}
addDiv(32);


   


