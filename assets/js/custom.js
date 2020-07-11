$("ul").on("click","li", function(){
     $(this).toggleClass("complated")}); 

     $("ul").on("click","span",function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newItem = $(this).val();
        console.log(newItem);
        $(this).val("");
        $("ul").append("<li><span><i class='fas  fa-window-close'></i></span>"+" "+ newItem +"</li>");
    }
});

/*
$(".fa-edit").click(function(){
    //alert("erer");
    var inp = $("#in");
    $(inp).fadeToggle()
});
*/