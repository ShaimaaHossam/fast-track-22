$(document).ready(function () {
    $.getJSON("./database/places.json", function (data) {
        $.each(data.places, function (val, i) {
            createHTML(i)
            $(document).on("click", "#"+i.id, function(){
                createModal(i)
            })
        })
    })

    function createHTML(place) {
        var place_container = document.createElement("div")
        place_container.classList.add("col-12", "col-lg-3", "col-md-6")
        var link = document.createElement("a")
        link.style.textDecoration = "none"
        link.rel = "modal:open"
        link.id = place.id
        link.href="#modal"
        place_container.append(link)

        var img = document.createElement("img")
        img.classList.add("w-100", "h-50")
        img.src = place.image
        link.append(img)

        var text_container = document.createElement("div")
        text_container.classList.add("text-center", "back-light", "w-100", "px-3", "pt-1", "h-50", "d-flex", "flex-column", "justify-content-between")

        var name = document.createElement("p")
        name.classList.add("text-uppercase", "header-color", "fw-bold", "m-0", "mt-1")
        name.innerHTML = place.name
        text_container.append(name)

        var brief = document.createElement("p")
        brief.classList.add("fw-bold", "text-color", "subtext", "mt-1")
        brief.innerHTML = place.brief
        text_container.append(brief)

        var details_container = document.createElement("div")
        details_container.classList.add("d-flex", "date-text", "text-color", "justify-content-between", "mt-2")
        
        var date_container = document.createElement("div")
        date_container.classList.add("d-flex", "align-items-baseline")
        date_container.innerHTML ="<i class='fa-regular fa-calendar me-1'></i><p>"+place.date+"</p>"

        var comments_container = document.createElement("div")
        comments_container.classList.add("d-flex", "align-items-baseline")
        comments_container.innerHTML ="<i class='fa-regular fa-calendar me-1'></i><p>"+place.comments+" comments</p>"
        details_container.append(date_container)
        details_container.append(comments_container)
        text_container.append(details_container)
        link.append(text_container)

                
        $("#places").append(place_container)
    }

    function createModal(place){
        $("#modal-img").attr("src", place.image)
        $("#modal-title").html(place.name)
        $("#modal-body").html(place.description)
    }
})