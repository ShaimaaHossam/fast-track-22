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
        $("#places").append(`
            <div class="col-md-6 col-lg-3 col-12">
                <a rel="modal:open" id="${place.id}" href="#modal">
                    <img class="w-100 h-50" src="${place.image}" />
                    <div class="text-center back-light w-100 px-3 pt-1 h-50 d-flex flex-column justify-content-between">
                        <p class="text-uppercase header-color fw-bold m-0">${place.name}</p>
                        <p class="subtext fw-bold text-color">${place.brief}</p>
                        <div class="d-flex date-text text-color justify-content-between">
                            <div class="d-flex align-items-baseline">
                            <i class='fa-regular fa-calendar me-1'></i><p>${place.date}</p>
                            </div>
                            <div class="d-flex align-items-baseline">
                            <i class='fa-regular fa-calendar me-1'></i><p>${place.comments} comments</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `)
    }

    function createModal(place){
        $("#modal-img").attr("src", place.image)
        $("#modal-title").html(place.name)
        $("#modal-body").html(place.description)
    }
})