$(document).on("click", "#half-dozen", function(){
    $("#bun-detail-photo").attr("src", "4Asset 1.png");
    $(".size-text").html("Six buns are more fun!");
    $(".unitPrice").html("$17");
    $(".select-flavors-1").show();
    $(".select-flavors-2").show();
});

$(document).on("click", "#dozen", function(){
    $("#bun-detail-photo").attr("src", "bun bun 2.png");
    $(".size-text").html("Keep a dozen warm in the oven!");
    $(".unitPrice").html("$34");
    $(".select-flavors-1").show();
    $(".select-flavors-2").show();
});

$(document).on("click","#single", function(){
    $("#bun-detail-photo").attr("src","famous-original.jpg");
    $(".size-text").html(" ");
    $(".unitPrice").html("$3.50");
    $(".select-flavors-1").hide();
    $(".select-flavors-2").hide();
});

function bun(sizeType, flavor1, unitPrice){
this.size = sizeType;
this.flavor1 = flavor1;
this.unitPrice = unitPrice;
}
//Global bun variables
var sizeType;
var flavor1;
var flavor2;
var unitPrice;

//$(document).on("click","input:radio[name=size]", function() {
    //sizeType = $("input:radio[name=size]:checked").val();
    //console.log(sizeType);
//});

$(document).on("change","#flavorSelect1", function() {
    flavor1 = $("flavorSelect1").val();
    console.log(flavor1);
});


$(document).on("click",".addToCart", function() {
    sizeType = $("input:radio[name=size]:checked").val();
    console.log(sizeType);
    flavor1 = $("#flavorSelect1").val();
    console.log(flavor1);
});
//flavor1 = $("#flavorSelect1").val();
//unitPrice = $(".unitPrice").html;
//var selectedBun = new bun(sizeType, flavor1, unitPrice);
//var shoppingArray = JSON.parse(localStorage.getItem("selectedBun")) || [];
//console.log(localStorage.getItem(selectedBun));
//localStorage.setItem("selectedBun", JSON.stringify(shoppingArray));
//});

$(document).ready(function() {
})
