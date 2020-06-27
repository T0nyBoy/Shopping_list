//TO RETRIEVE THE LIST WITH li ITEMS CREATED WHEN WINDOW CLOSED
listarray=[]; //creating an empty array for the list items that we are going to save
//1. we need to find if the array is empty (which is by default)
if(listarray.length===0){
    //2. retrieving the data from the local storage
    var retrievedData = localStorage.getItem("stringyfyTheArray"); //we have to put the name of the item created in the local storage which is a string 
    
    //3. updating the array with the retrieved data
    listarray = JSON.parse(retrievedData);
    //4. adding the array items to the emptu ul
    $("#theshoppingList").append(listarray);
    }

$("#showList").on("click", function(){
    $("#additembutton").slideToggle("500");
    $("input").slideToggle("500");
});


$("ul").on("click","li",function () {
    $(this).toggleClass("bought");
    });


$("input").on("keypress",function(event){
    if(event.which==13){
        var insertedtext = $("input").val();
        $("#theshoppingList").append('<li class="list-group-item">'+insertedtext+'<i class="far fa-trash-alt" id="trashbin"></i></li>');
        $("input").val("");
    }
});


$("#additembutton").on("click",function(event){
    var insertedtext = $("input").val();
        $("#theshoppingList").append('<li class="list-group-item">'+insertedtext+'<i class="far fa-trash-alt" id="trashbin"></i></li>');
        $("input").val("");
});


$("ul").on("click","#trashbin", function(event){
    $(this).parent().fadeOut("200",function(){
        $(this).remove(); 
    });
    event.stopPropagation();
});

$(window).on("unload",function(){
    listarray=[];
    $("#theshoppingList").each(function(){
        listarray.push($(this).html());
      });
      var stringyfyTheArray = JSON.stringify(listarray);
      localStorage.setItem("stringyfyTheArray", stringyfyTheArray);
});