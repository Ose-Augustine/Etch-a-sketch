const container=document.querySelector("#container");
//first button and appends to the container//
const button0=document.createElement("button");
button0.textContent="Generate your design";
container.appendChild(button0);

//second button, adds class "button1" and appends to container//
const button1=document.createElement("button");
button1.textContent="generate default grid";
button1.classList.toggle("button1");
container.appendChild(button1);

//subContainer to handle all the square divs//
const subContainer=document.createElement("div");
subContainer.classList.toggle("subContainer")
container.appendChild(subContainer);

//subContainer to handle all the user style grid//
const userStyle=document.createElement("div");
userStyle.classList.toggle("userStyle");
container.appendChild(userStyle);

function originalLayOut(){
    i=0;
    while(i < 64){
        let newDiv=document.createElement("div");
        newDiv.textContent=" ";
        subContainer.appendChild(newDiv);
        i ++;
    };
}
function generateUserGrid(userInput){
    let gridLimit=userInput ** 2;
    userStyle.setAttribute('style',`grid-template-columns:repeat(${userInput},1fr)`);
    // userStyle.setAttribute('style',`grid-template-rows:repeat (${userInput},1fr)`);
    i=0;    
    while((i < gridLimit) && userInput <= 100){
        let userGridSpec=document.createElement('div');
        userGridSpec.textContent=' ';
        userStyle.appendChild(userGridSpec);
        i ++;
    }
}

let userInput=' ';

button0.addEventListener("click",function(){
    console.clear();
    let userChoice=prompt('Number of square per side of the new grid?','')
    generateUserGrid(userChoice);
    userInput += userChoice;
    alert(`Changing the layout to your liking with ${userChoice}`);
})
button1.addEventListener('click',function(){
    originalLayOut();
    alert("This is the original layout of this page. Try making yours!\n Refresh before changing!")
})


