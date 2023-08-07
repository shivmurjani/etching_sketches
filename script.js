const divContain = document.querySelector('#container');



function createDiv(number){
    for(let i=0;i<number;i++){
    var newDiv = document.createElement('div');
    divContain.appendChild(newDiv);
}
}

function addDiv(number){
    switch(number){
        case 1:
            createDiv(1);
            //set style attributes
            break;
        
        case 2:
            createDiv(2);
            break;
        case 4:
            createDiv(4);
            //set style attributes
            break;
        
        case 8:
            createDiv(8);
            break;       
        case 16:
            createDiv(16);
            //set style attributes
            break;
        
        case 32:
            createDiv(32);
            break;
        case 64:
            createDiv(64);
            //set style attributes
            break;
        
        case 128:
            createDiv(128);
            break;  
        case 144:
            createDiv(144);
            break;    

    }

}


function removeDiv(){
    while(divContain.firstChild){
        divContain.removeChild(divContain.firstChild);
    }
}
addDiv(128);


   


