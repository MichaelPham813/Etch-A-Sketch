//Create Container Variable
let mainContainer = document.createElement("div");
let gridContainer = document.createElement("div");
let clearBtn = document.createElement("button");
document.body.appendChild(mainContainer);
mainContainer.appendChild(gridContainer);
mainContainer.appendChild(clearBtn);
mainContainer.className = "container";
gridContainer.className = "gridContainer";
clearBtn.className = "clear-button";
clearBtn.value = "Clear";
clearBtn.textContent = "Clear";



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

        //Hover to see the color you're using
        rowItems.addEventListener("mouseover",function(event)
        {
            event.target.style.backgroundColor = "red";
        });
        rowItems.addEventListener("mouseout",function(event)
        {
            event.target.style.backgroundColor = "white";
        });


        //Click to apply color
        rowItems.addEventListener("mousedown",function(event)
        {
            event.target.id = "color-change";
        });

        //click and move mouse
        rowItems.addEventListener("mousemove",function(event)
        {
            if(event.buttons == 1)
            {
                event.target.id = "color-change";
            }
        });

    }

    //Hover to see the color you're using
    columnItems.addEventListener("mouseover",function(event)
    {
        event.target.style.backgroundColor = "red";
    });
    columnItems.addEventListener("mouseout",function(event)
    {
        event.target.style.backgroundColor = "white";
    });


    //Click to apply color
    columnItems.addEventListener("mousedown",function(event)
    {
        event.target.id = "color-change";
    });

    //click and move mouse
    columnItems.addEventListener("mousemove",function(event)
    {
        if(event.buttons == 1)
        {
            event.target.id = "color-change";
        }
    });
}

//Clear Btn
clearBtn.addEventListener("click" , function(event)
{
    let clearItems = document.getElementsByTagName("div");
    for(let i = 0 ; i < clearItems.length;i++)
    {
        if(clearItems[i].id == "color-change")
        {
            clearItems[i].id = "";
        }
    }


    
});

