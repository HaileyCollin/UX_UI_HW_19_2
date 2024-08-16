function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

    $(".themeChange").on("click", function() {
        if ($(this).hasClass("light-mode")) {
            $("#stylesheet").attr("href", "./css/styles.css")
        }
    
        else if ($(this).hasClass("dark-mode")) {
            $("#stylesheet").attr("href", "./css/darkmode.css")
        }
    });