$(document).ready(function() {
    console.log("ready!");
    $(".remove-action").click(function() {
        $(this).parents(".product").remove()
    });
    $("#remove-all").click(function() {
        $(".product").find(".selection").each(function(index) {
            if ($(this).prop(`checked`) === true) {
                $(this).parents(".product").remove()
            }
        });
    });
    $("#selection-all").click(function() {
        if ($("*:checkbox").prop(`checked`)) {
            $("*:checkbox").prop(`checked`, true)
        } else {
            $("*:checkbox").prop(`checked`, false)
        }
    });
});