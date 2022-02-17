//#region Container and Buttons Variable
//Create Container Variable
let mainContainer = document.createElement("div");
let gridContainer = document.createElement("div");
let itemsContainer = document.createElement("div");
//Attach div container into the body
document.body.appendChild(mainContainer);
mainContainer.appendChild(gridContainer);
mainContainer.appendChild(itemsContainer);
mainContainer.className = "container";
gridContainer.className = "gridContainer";
itemsContainer.className = "itemsContainer"; 
//Btn Var
let clearBtn = document.createElement("button");
let eraseBtn = document.createElement("button");
let drawBtn = document.createElement("button");
//Attach button to the container
itemsContainer.appendChild(clearBtn);
itemsContainer.appendChild(eraseBtn);
itemsContainer.appendChild(drawBtn);
//Set class and html name to button
clearBtn.className = "clear-button";
clearBtn.value = "Clear";
clearBtn.textContent = "Clear";
eraseBtn.className = "erase-button";
eraseBtn.value = "Erase";
eraseBtn.textContent = "Erase";
drawBtn.className = "draw-button";
drawBtn.value = "Draw";
drawBtn.textContent = "Draw";
//#endregion
//#region Grid draw
//Loop to create the grid with element and function
for(let i = 0 ; i < 16; i++)
{
    
    let columnItems = document.createElement("div");
    columnItems.className = "gridItems";
    columnItems.draggable = false;
    gridContainer.appendChild(columnItems);
    for(let j = 0 ; j < 16 ; j++)
    {
        let rowItems = document.createElement("div");
        rowItems.className = "gridItems";
        rowItems.draggable = false;
        gridContainer.appendChild(rowItems);
    }
}
//#endregion
//#region Button and Draw logic
//Clear Btn
clearBtn.addEventListener("click" , function(event)
{
    let clearItems = document.getElementsByTagName("div");
    for(let i = 0 ; i < clearItems.length;i++)
    {
        clearItems[i].style.backgroundColor = "";
    } 
});

//Erase Btn
eraseBtn.addEventListener("click",function(event)
{
    Erase();
});

//Draw Btn
drawBtn.addEventListener("click",function(event)
{
    Draw();
});

Draw();


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
                event.target.style.backgroundColor = "red";
            }
        });
        gridItems[i].addEventListener("mousedown",function(event)
        {
            event.target.style.backgroundColor = "red";
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




//#endregion
