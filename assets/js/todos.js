$("ul").on("click", "li", function () { 
    $(this).toggleClass("completed");
});

$("ul").on("click", "span",function(Event){
    $(this).parent().fadeOut("slow", function() {
        $(this).remove();
    });
    Event.stopPropagation();
});

$("input[type='text']").keypress(function(Event){
    if(Event.which === 13) {
        var input = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + input + "</li>");
    }
});