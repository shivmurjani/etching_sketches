const divContain = document.querySelector('#divContainer');



function createDiv(number,x){
    for(let i=0;i<number;i++){
    var newDiv = document.createElement('div');
    newDiv.setAttribute('style','width:'+x+'px; height:'+x+'px;');
    divContain.appendChild(newDiv);
}
}

function addDiv(number){
    if(divContain.firstChild){
        removeDiv();
    }
    switch(number){
        case 16:

            createDiv(900,20);
            //set style attributes
            break;
        
        case 32:
            createDiv(400,30);

            break;
        case 48:
            createDiv(144,50);
            //set style attributes
            break;
        
        case 64:
            createDiv(100,60);
            break;       
        case 80:
            createDiv(64,75);
            //set style attributes
            break;
        
        case 96:
            createDiv(36,100);
            break;
        case 112:
            createDiv(25,120);
            break;  

        case 128:
            createDiv(16,150);
            break;    

    }

}

function removeDiv(){
    while(divContain.firstChild){
        divContain.removeChild(divContain.firstChild);
    }
}

function changePixel(pixelSize){
    addDiv(pixelSize);
    return;
}

let pixelSlider = document.querySelector('.slider');
let pixelValue = document.querySelector('#rangeValue');

//pixelSlider
pixelSlider.addEventListener('click',()=>{
    let pixel = (parseInt(pixelValue.textContent));
    changePixel(pixel);
});

//eraser

//erase

//colorpalette

//shader

//DISCODISCO WHOO WHOO




   


