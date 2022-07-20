const form = document.getElementById("form")
const label = document.getElementById("label")
const input = document.getElementById("input")
const clear = document.getElementById("clear")
const labelsDiv = document.getElementById("labels")
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
function remove(element){
    element.remove()
}
function clearLabels(e){
    const labels = document.querySelectorAll(".label")
    labels.forEach(remove)
}
function printLabel(e){
    e.preventDefault()

    if(containsSpecialChars(input.value)){
        alert("Please make sure your input has no special characters")
    }else if(input.value == ""){
        alert("Make sure you entered something")
    } else{
    const text = input.value
    const newLabel = document.createElement("label")
    const close = document.createElement("span")
    close.classList.add("fw-bold", "ms-2")
    close.textContent = "x"
    newLabel.textContent = text
    newLabel.classList.add("me-2", "mt-2","bg-success", "px-2", "text-white", "rounded", "label")
    newLabel.appendChild(close)
    labelsDiv.appendChild(newLabel)
    }

    input.value = ""
}
function removeLabel(e){
    console.log("accessed")
    e.target.parentElement.remove()
}
function globalEventListener(event, selector, callback){
    document.documentElement.addEventListener(event, function(e){
        if(e.target.matches(selector))
            callback(e)
    })
}
globalEventListener("click", "span", removeLabel)
form.addEventListener("submit", printLabel)
form.addEventListener("enter", printLabel)
clear.addEventListener("click", clearLabels)