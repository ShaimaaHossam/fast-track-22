const button = document.querySelector(".btn")
let i = 0;
button.addEventListener("click", function(e){
    i++;
    console.log(e.target)
    var div = document.createElement("div")
    div.innerHTML= "Div " +i;
    div.classList.add("box")
    document.body.append(div)
})
globalEventListener("click", "div", function(e){
    alert(e.target.innerHTML)
})

function globalEventListener(event, selector, callback){
    document.documentElement.addEventListener(event, function(e){
        if(e.target.matches(selector))
            callback(e)
    })
}