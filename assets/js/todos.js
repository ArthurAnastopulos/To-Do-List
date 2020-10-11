$("li").click(function () { 
    $(this).toggleClass("completed");
});

$("span").click(function(Event){
    $(this).parent().fadeOut("slow", function() {
        $(this).remove();
    });
    Event.stopPropagation();
});