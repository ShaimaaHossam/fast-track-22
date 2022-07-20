const toggleButton = document.querySelector(".toggle")
const themeText = document.querySelector("#theme-text")
const card = document.querySelector("#card")
const text = document.querySelectorAll(".text")
const editBtn = document.querySelector(".edit")
const cover = document.querySelector(".cover")
const profilePic = document.querySelectorAll(".profile-pic")
const mainPic = document.querySelector(".main-pic")
const profileUsername = document.querySelectorAll(".username")
const locationText = document.querySelector(".location")
const number = document.querySelectorAll(".number")
const verifiedIcon = document.querySelectorAll(".verified")
const activeLink = document.querySelector(".active-link")
const postBody = document.querySelector(".post-body")

const username = "John Doe"
const myLocation = "Cairo"

locationText.innerHTML=myLocation

profileUsername.forEach(user => user.innerHTML = username)
profilePic.forEach(user => user.innerHTML="<img src='./assets/img.jpg' />" )

let toggle = 0;
toggleButton.addEventListener("click", function(e){
    toggleButton.classList.toggle("active")
    if(toggle == 0){
        themeText.innerHTML = "Dark Theme"
        card.style.backgroundColor = "#151e2b"
        text.forEach(text => text.style.color = "white")
        themeText.style.color="white"
        number.forEach(number => number.style.color="white")
        profilePic.forEach(pic=>pic.style.backgroundColor="#4c566d")
        editBtn.style.color="gray"
        activeLink.style.color = "white"
        cover.style.backgroundColor = "#93a5af"
        mainPic.style.borderColor="#151e2b"
        verifiedIcon.forEach(icon=>icon.style.fill="white")
        postBody.style.color = "white";
        toggle =1;
    }
    else{
        themeText.innerHTML = "Light Theme"
        themeText.style.color="gray"
        card.style.backgroundColor = "white"
        activeLink.style.color = "black"
        text.forEach(text => text.style.color = "black")
        number.forEach(number => number.style.color="black")
        profilePic.forEach(pic=>pic.style.backgroundColor="#bd9281")
        verifiedIcon.forEach(icon=>icon.style.fill="#1da1f2")
        editBtn.style.color="black"
        cover.style.backgroundColor = "#ead1cc"
        mainPic.style.borderColor = "white"
        postBody.style.color= "gray"
        toggle = 0;
    }
})

let drop = 0;

const arrow = document.querySelector(".down")
const dropdown = document.querySelector(".dropdown")
const options = document.querySelector(".options")
dropdown.addEventListener("click", function(){
    if(drop == 0){
        arrow.classList.remove("fa-caret-down")
        arrow.classList.add("fa-caret-up")
        options.style.display = "block"
        drop = 1;
    }
    else{
        arrow.classList.remove("fa-caret-up")
        arrow.classList.add("fa-caret-down")
        options.style.display = "none"

        drop = 0;
    }
    
})

globalEventListener("click", ".option", function(e){
    document.body.style.backgroundColor = e.target.innerHTML
})

function globalEventListener(type, selector, callback){
    document.documentElement.addEventListener(type, function(e){
        if(e.target.matches(selector)){
            callback(e)
        }
    } )
}