
$(document).ready(function(){
    const cities = [
        {
            city: 'London',
            text: 'London is the capital city of England'
        }, 
        {
            city:'Paris',
            text: 'Paris is the capital city of France'
        }, 
        {
            city: 'Tokyo', 
            text: 'Tokyo is the capital city of Japan'
        }, 
        {
            city: 'Cairo', 
            text: 'Cairo is the capital city of Egypt'
        }
    ]

    $.each(cities, function(val, i){
        $("#nav").append("<li id='"+ i.city+"'><a>"+i.city+"</a></li>")
        $(document).on("click", "#"+i.city, function(e){
           $(this).css("background-color", "rgb(198, 202, 205)")
           $(this).parent().children('li').not(this).css('background-color', 'transparent');
           $("#title").html(this.city)
           $("#text").html(this.text)
        })
    })
    
});

