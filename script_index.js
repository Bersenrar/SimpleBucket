PRICES = {
    "chtulhu": 500,
}

$(document).ready(function(){
   $("#chtulhu_input").on("click", function(e){
    let new_value = $("#bucket_counter").text();
    new_value = Number(new_value);
    new_value = ++new_value;
    $("#bucket_counter").text(new_value);
    localStorage.setItem("goods_amt", new_value)
   });
});