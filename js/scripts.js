//biz logic
var add = function(budget, sights, weather, distance, style) {
  return budget + sights + weather + distance + style;
}

$(document).ready(function() {
  $("form#form-group").submit(function(event) {
    event.preventDefault();

    var budget = parseInt($("input:radio[name=budget]:checked").val());
    var sights = parseInt($("input:radio[name=sights]:checked").val());
    var weather = parseInt($("input:radio[name=weather]:checked").val());
    var distance = parseInt($("input:radio[name=distance]:checked").val());
    var style = parseInt($("input:radio[name=style]:checked").val());

    var total = add(budget, sights, weather, distance, style);

    if (total < 6) {
         $("#bangkok").show();

       } else if (total > 5 && total < 11) {
         $("#baja").show();

       } else if (total > 10 && total < 16) {
         $("#mapi").show();

       } else if (total > 15 && total < 21) {
         $("#london").show();

       } else if (total > 20 && total < 26) {
         $("#fiji").show();
       }

    });
  });
