$(document).ready(function(){
    $("button.link").click(function(){
        window.location.href=$(this).data("href");
    })
})