const container=document.querySelector("#container");
const button=document.createElement("button");
button.textContent="Clear current grid";
container.appendChild(button);
i=0
const subContainer=document.createElement("div");
subContainer.classList.toggle("subContainer")
container.appendChild(subContainer);
originalLayOut();

function originalLayOut(){
    while(i < 100){
        let newDiv=document.createElement("div");
        newDiv.textContent=" ";
        subContainer.appendChild(newDiv);
        i ++;
}}

let userInput=' ';

button.addEventListener("click",function(){
    let userChoice=prompt('Number of square per side of the new grid?','')
    userInput += userChoice;
    alert(`Changing the layout to your liking with ${userChoice}`);
})
console.log(userInput);

function generateUserGrid(userInput){
    i=0;
    while(i < userInput){
        let userGridSpec=document.createElement('div');
        userGridSpec.textContent=' ';
        subContainer.appendChild(userGridSpec);
        i ++;
    }
}
