const container=document.querySelector("#container");
i=0
const subContainer=document.createElement("div");
subContainer.classList.toggle("subContainer")
container.appendChild(subContainer);
while(i < 100){
    let newDiv=document.createElement("div");
    subContainer.appendChild(newDiv);
    i ++;
}
//subContainer.style.display="flex";