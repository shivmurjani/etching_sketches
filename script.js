const divContain = document.querySelector('#divContainer');



function createDiv(number){
    for(let i=0;i<number;i++){
    var newDiv = document.createElement('div');
    divContain.appendChild(newDiv);
}
}

function addDiv(number){
    switch(number){
        case 16:
            createDiv(1);
            //set style attributes
            break;
        
        case 32:
            createDiv(36);
            break;
        case 48:
            createDiv(4);
            //set style attributes
            break;
        
        case 64:
            createDiv(8);
            break;       
        case 80:
            createDiv(16);
            //set style attributes
            break;
        
        case 96:
            createDiv(32);
            break;
        case 64:
            createDiv(64);
            //set style attributes
            break;
        
        case 112:
            createDiv(128);
            break;  
        case 128:
            createDiv(144);
            break;    

    }

}


function removeDiv(){
    while(divContain.firstChild){
        divContain.removeChild(divContain.firstChild);
    }
}
addDiv(32);


   


