$(document).ready(function(){

    var option = {};
    option.url = "./src/data/menus.json";
    option.method = "get";
    option.dataType = "json";
    option.success = function(data, textStatus, xhr) {
        console.log(data);
    };
    option.error = function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
    };

    $.ajax(option);

});