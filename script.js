//Create Container Variable
let mainContainer = document.createElement("div");
let gridContainer = document.createElement("div");
let clearBtn = document.createElement("button");
let eraseBtn = document.createElement("button");
document.body.appendChild(mainContainer);
mainContainer.appendChild(gridContainer);
mainContainer.appendChild(clearBtn);
mainContainer.appendChild(eraseBtn);
mainContainer.className = "container";
gridContainer.className = "gridContainer";
clearBtn.className = "clear-button";
clearBtn.value = "Clear";
clearBtn.textContent = "Clear";
eraseBtn.className = "erase-button";
eraseBtn.value = "Erase";
eraseBtn.textContent = "Erase";


//condition bool
let running = true;
//Loop to create the grid with element and function
for(let i = 0 ; i < 16; i++)
{
    
    let columnItems = document.createElement("div");
    columnItems.className = "gridItems";
    gridContainer.appendChild(columnItems);
    for(let j = 0 ; j < 16 ; j++)
    {
        let rowItems = document.createElement("div");
        rowItems.className = "gridItems";
        gridContainer.appendChild(rowItems);
        //click and move mouse
        rowItems.addEventListener("mousemove",function(event)
        {
            if(event.buttons == 1)
            {
                event.target.style.backgroundColor = "red";

            }
        });

        //Click to apply color
        rowItems.addEventListener("mousedown",function(event)
        {
            event.target.style.backgroundColor = "red";
        });
    }
    //click and move mouse
    columnItems.addEventListener("mousemove",function(event)
    {
        if(event.buttons == 1)
        {
            event.target.style.backgroundColor = "red";
        }
    });

    //Click to apply color
    columnItems.addEventListener("mousedown",function(event)
    {
        event.target.style.backgroundColor = "red";
    });

}


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
});
//TODO transfer the whole draw color to grid into different loop

