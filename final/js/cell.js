function workout(){
    const img = document.createElement("img");
    img.setAttribute("src", "./img/workout.gif");
    img.setAttribute("style", "object-fit:fill; width:120px; height:120px;");
    document.getElementById("workout-cell").appendChild(img);

    document.getElementById("workout-text").style.display = "none";
    smoothie()
    

}

function smoothie(){
    document.getElementById("smoothie-text").style.display = 'block';

    const img = document.createElement("img");
    img.setAttribute("src", "./img/smoothie-2.gif");
    img.setAttribute("style", "object-fit:fill; width:120px; height:120px;");
    document.getElementById("smoothie-cell").appendChild(img);
}

function schoolwork(){

    document.getElementById("workout-text").style.display = "none";
    const img = document.createElement("img");
    img.setAttribute("src", "./img/studying.gif");
    img.setAttribute("style", "object-fit:fill; width:120px; height:120px;");
    document.getElementById("studying-cell").appendChild(img)
    document.getElementById("studying-text").style.display = "block";

}

function food(){
    document.getElementById("studying-text").style.display = "none";
    const img = document.createElement("img");
    img.setAttribute("src", "./img/food-2.gif");
    img.setAttribute("style", "object-fit:fill; width:120px; height:120px;");
    document.getElementById("food-cell").appendChild(img)

    document.getElementById("food-text").style.display = "block"
    
}
