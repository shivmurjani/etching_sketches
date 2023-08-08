
const divContain = document.querySelector('#divContainer');
let divNodes = divContain.childNodes;
const discoButton = document.querySelector('#disco');
const shaderButton = document.querySelector('#shader');

addDiv(32);
function defaultColor(){
    divNodes.forEach(node=>{
        node.addEventListener('mouseover',()=>{
            node.style.backgroundColor='black';
        });
    });
}

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
            defaultColor();
            //set style attributes
            break;
        
        case 32:
            createDiv(400,30);
            defaultColor();
            break;
        case 48:
            createDiv(144,50);
            defaultColor(); //set style attributes
            break;
        
        case 64:
            createDiv(100,60);
            defaultColor();
            break;       
        case 80:
            createDiv(64,75);
            defaultColor();//set style attributes
            break;
        
        case 96:
            createDiv(36,100);
            defaultColor();
            break;
        case 112:
            createDiv(25,120);
            defaultColor();
            break;  

        case 128:
            createDiv(16,150);
            defaultColor();
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

divNodes.forEach(node =>{
    console.log(node);
});
divNodes.forEach(node =>{
    console.log(node);
});

let erase = document.querySelector('#erase')
erase.addEventListener('click',()=>{
    divNodes.forEach(node=>{
            node.style.backgroundColor='white';
        });
        defaultColor();
    });

let eraser = document.querySelector('#eraser')

eraser.addEventListener('click',()=>{
    divNodes.forEach(node=>{
            node.addEventListener('mouseover',()=>{
                node.style.backgroundColor='white';
            })
        });
        
    });


    shaderButton.addEventListener('click',()=>{
        divNodes.forEach(node=>{
            const originalColor = tinycolor('white');
            node.style.backgroundColor='white';
            node.addEventListener('mouseover',()=>{
                let varcolr = originalColor.darken(20).toString();
                node.style.backgroundColor = varcolr;
            });
        });
    });





   


