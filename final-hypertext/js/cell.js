function workout(){
    let e = document.getElementById("workout-img")
    if (e == null){
        const img = document.createElement("img");
        img.setAttribute('id', 'workout-img')
        img.setAttribute("src", "./img/workout.gif");
        img.setAttribute("style", "object-fit:cover; width:100%; height:100%;");
        document.getElementById("workout-cell").appendChild(img);
        document.getElementById("morning-text").style.display = "none";
        smoothie()    
    }   
}

function smoothie(){
    let e = document.getElementById("smoothie-img")
    if (e == null){
        document.getElementById("smoothie-text").style.display = 'block';
        const img = document.createElement("img");
        img.setAttribute("id", "smoothie-img")
        img.setAttribute("src", "./img/smoothie-2.gif");
        img.setAttribute("style", "object-fit:cover; width:100%; height:100%;");
        document.getElementById("smoothie-cell").appendChild(img);
    }
}

function schoolwork(){
    let e = document.getElementById('schoolwork-img')
    if (e == null){
        document.getElementById("morning-text").style.display = "none";
        const img = document.createElement("img");
        img.setAttribute("id", "schoolwork-img")
        img.setAttribute("src", "./img/studying.gif");
        img.setAttribute("style", "object-fit:cover; width:100%; height:100%;");
        document.getElementById("studying-cell").appendChild(img)
        document.getElementById("studying-text").style.display = "block";
    }
}

function food(){
    let e = document.getElementById('food-img')
    if (e == null){
        document.getElementById("studying-text").style.display = "none";
        const img = document.createElement("img");
        img.setAttribute("id", "food-img")
        img.setAttribute("src", "./img/food-2.gif");
        img.setAttribute("style", "object-fit:fill; width:100%; height:100%;");
        document.getElementById("food-cell").appendChild(img)
        document.getElementById("food-text").style.display = "block"
    }
}

function netflix(){
    let e = document.getElementById('netflix-img')
    if (e == null){
        document.getElementById("studying-text").style.display = "none";
        document.getElementById("food-text").style.display = "none";
        const img = document.createElement("img");
        img.setAttribute("id", "netflix-img");
        img.setAttribute("src", "./img/netflix2.gif");
        img.setAttribute("style", "object-fit:fill; width:100%; height:100%;");
        document.getElementById("netflix-cell").appendChild(img);
        document.getElementById("netflix-text").style.display = "block"
    }   
}

function email(){
    let e = document.getElementById('email-img')
    if (e == null){
        document.getElementById("netflix-text").style.display = "none";
        document.getElementById("smoothie-text").style.display = "none";
        const img = document.createElement("img");
        img.setAttribute("id", "email-img")
        img.setAttribute("src", "./img/buy.gif");
        img.setAttribute("style", "object-fit:fill; width:100%; height:100%;");
        document.getElementById("email-cell").appendChild(img)   
        document.getElementById("email-text").style.display = "block"
    }   
}

function night(){
    let e = document.getElementById('bed-img')
    if (e == null){
        document.getElementById("email-text").style.display = "none";
        const img = document.createElement("img");
        img.setAttribute("id", "bed-img");
        img.setAttribute("src", "./img/bed-2.gif");
        img.setAttribute("style", "object-fit:cover; width:100%; height:100%;");
        document.getElementById("bed-cell").appendChild(img); 
        document.getElementById("bed-text").style.display = "block"
    }   
}

function morning(){
    let e = document.getElementById('morning-img')
    if (e == null){
        document.getElementById("bed-text").style.display = "none";
        const img = document.createElement("img");
        img.setAttribute("id", "morning-img");
        img.setAttribute("src", "./img/morning.gif");
        img.setAttribute("style", "object-fit:cover; width:100%; height:100%;");
        document.getElementById("morning-cell").appendChild(img); 
        document.getElementById("morning-text").style.display = "block"
    }   
}