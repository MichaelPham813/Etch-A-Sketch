//#region Container and Buttons Variable
//Create Container Variable
let mainContainer = document.createElement("div");
let gridContainer = document.createElement("div");
let itemsContainer = document.createElement("div");
let titleContainer = document.createElement("div");
let buttonContainer = document.createElement("div");
let rangeContainer = document.createElement("div");
//Attach div container into the body
document.body.appendChild(mainContainer);
mainContainer.appendChild(gridContainer);
mainContainer.appendChild(itemsContainer);
itemsContainer.appendChild(titleContainer);
itemsContainer.appendChild(buttonContainer);
itemsContainer.appendChild(rangeContainer);
mainContainer.className = "container";
gridContainer.className = "gridContainer";
itemsContainer.className = "itemsContainer"; 
buttonContainer.className = "buttonContainer";
titleContainer.className = "titleContainer";
rangeContainer.className = "rangeContainer";
//Btn Var

let clearBtn = document.createElement("button");
let eraseBtn = document.createElement("button");
let drawBtn = document.createElement("button");
let randomBtn = document.createElement("button");
let grayScaleBtn = document.createElement("button");
let colorPickerBtn = document.createElement("input");
let rangeSlider = document.createElement("input");
let rangeVal = document.createElement("p");
let title = document.createElement("h3");


//Attach button to the container
titleContainer.appendChild(title);
buttonContainer.appendChild(clearBtn);
buttonContainer.appendChild(eraseBtn);
buttonContainer.appendChild(drawBtn);
buttonContainer.appendChild(colorPickerBtn);
buttonContainer.appendChild(randomBtn);
buttonContainer.appendChild(grayScaleBtn);
rangeContainer.appendChild(rangeVal);
rangeContainer.appendChild(rangeSlider);
//Set class and html name to button
title.textContent = "Sketch-a-Sketch";
title.textContent = title.textContent.toUpperCase();
clearBtn.className = "clear-button";
clearBtn.value = "Clear";
clearBtn.textContent = "Clear";
eraseBtn.className = "erase-button";
eraseBtn.value = "Erase";
eraseBtn.textContent = "Erase";
drawBtn.className = "draw-button";
drawBtn.value = "Draw";
drawBtn.textContent = "Draw";
colorPickerBtn.className = "color-picker";
colorPickerBtn.type = "color";
colorPickerBtn.value = "#F9AC53";
randomBtn.className = "random-button";
randomBtn.textContent = "Rainbow";
randomBtn.value = "Rainbow";
grayScaleBtn.className = "gray-scale";
grayScaleBtn.textContent = "Gray Scale";
rangeVal.className = "range-val";
rangeVal.value = "text";
rangeSlider.value = "16";
rangeVal.textContent = `${rangeSlider.value} x ${rangeSlider.value}`;
rangeSlider.className = "range-slider";
rangeSlider.type = "range";
rangeSlider.min = "1";
rangeSlider.max = "100";


//#endregion
//#region Grid draw
//Loop to create the grid with element and function
drawGrid(16);

function drawGrid(gridNumber)
{
    for(let i = 0 ; i < (gridNumber*gridNumber); i++)
    {
        // Calculate cell height and width to fill board
        let cellWidth = 320/gridNumber + "px";
        let cellHeight = 320/gridNumber + "px";
        let gridItems = document.createElement("div");
        gridItems.className = "gridItems";
        gridItems.draggable = false;
        gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        gridItems.style = `width: ${cellWidth}; height: ${cellHeight}`;
        gridContainer.appendChild(gridItems);

    }
}
//#endregion
//#region Button and Draw logic

let currentOpacity = 0;


//Clear Btn
clearBtn.addEventListener("click" , function(event)
{
    Clear();
});

//Erase Btn
eraseBtn.addEventListener("click",function(event)
{
    Erase();
    clearBtn.id = "";
    eraseBtn.id = "highlight";
    drawBtn.id = "";
    randomBtn.id = "";
    grayScaleBtn.id = "";
});

//Draw Btn
drawBtn.addEventListener("click",function(event)
{
    Draw();
    clearBtn.id = "";
    eraseBtn.id = "";
    drawBtn.id = "highlight";
    randomBtn.id = "";
    grayScaleBtn.id = "";
});

//Random Btn
randomBtn.addEventListener("click",function(event)
{
    RandomDraw();
    clearBtn.id = "";
    eraseBtn.id = "";
    drawBtn.id = "";
    randomBtn.id = "highlight";
    grayScaleBtn.id = "";
});

//GrayScale Btn
grayScaleBtn.addEventListener("click",function(event)
{
    GrayScale();
    clearBtn.id = "";
    eraseBtn.id = "";
    drawBtn.id = "";
    randomBtn.id = "";
    grayScaleBtn.id = "highlight";
});



//Have grid items able to be drawned and erase
function Draw()
{
    let gridItems = document.getElementsByClassName("gridItems");
    for(let i = 0 ; i < gridItems.length;i++)
    {
        gridItems[i].addEventListener("mousemove",function(event)
        {
            if(event.buttons == 1)
            {
                event.target.style.backgroundColor = colorPickerBtn.value;
            }
        });
        gridItems[i].addEventListener("mousedown",function(event)
        {
            event.target.style.backgroundColor = colorPickerBtn.value;
        });
    }
}
function Erase()
{
    let gridDraw = document.getElementsByClassName("gridItems");
    for(let i = 0 ; i < gridDraw.length;i++)
    {
        gridDraw[i].addEventListener("mousemove",function(event)
        {
            if(event.buttons == 1)
            {
                event.target.style.backgroundColor = "";
            }
        });
        gridDraw[i].addEventListener("mousedown",function(event)
        {
            event.target.style.backgroundColor = "";
        });
    }
}
function Clear()
{
    let clearItems = document.getElementsByTagName("div");
    for(let i = 0 ; i < clearItems.length;i++)
    {
        clearItems[i].style.backgroundColor = "";
    } 
}

function RandomDraw()
{
    let gridRandomDraw = document.getElementsByClassName("gridItems");
    for(let i = 0 ; i < gridRandomDraw.length;i++)
    {

        gridRandomDraw[i].addEventListener("mousemove",function(event)
        {
            if(event.buttons == 1)
            {
                event.target.style.backgroundColor = 'rgb('+ Math.floor(Math.random()*255) + ','+ Math.floor(Math.random()*255)+ ', '+ Math.floor(Math.random()*255) +' )';
            }
        });
        gridRandomDraw[i].addEventListener("mousedown",function(event)
        {
            event.target.style.backgroundColor = 'rgb('+ Math.floor(Math.random()*255) + ','+ Math.floor(Math.random()*255)+ ', '+ Math.floor(Math.random()*255) +' )';
        });
    }
}

function GrayScale()
{
    let gridRandomDraw = document.getElementsByClassName("gridItems");
    for(let i = 0 ; i < gridRandomDraw.length;i++)
    {
        let currentOpacity = 0;
        gridRandomDraw[i].addEventListener("mousemove",function(event)
        {
            if(event.buttons == 1)
            {
                currentOpacity += 0.1;
                event.target.style.backgroundColor = `rgb(0,0,0,${currentOpacity+0.1})`;
            }
            
        });
        gridRandomDraw[i].addEventListener("mousedown",function(event)
        {
            currentOpacity+=0.1;
            event.target.style.backgroundColor = `rgb(0,0,0,${currentOpacity})`;
        });
    }
}



//#endregion
//#region Reload the grid to update grid items
rangeSlider.addEventListener("mousemove",function(event)
{
    if(event.buttons==1)
    {
        rangeVal.textContent = `${rangeSlider.value} x ${rangeSlider.value}`;
    }
});

rangeSlider.addEventListener("mouseup",function(event)
{
    reloadGrid();
});

function clearGrid()
{
    gridContainer.innerHTML = '';
}
function reloadGrid()
{
    clearGrid();
    drawGrid(rangeSlider.value);
}
//#endregion