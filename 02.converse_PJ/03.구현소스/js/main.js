/* main.js */
$(function () {
    const welcomSection = $(".welcome-section");
    const enterButton = welcomSection.find(".enter-button");
    const mainWrap = $('.wrapper');
    mainWrap.css('display','none');

    setTimeout(function(){
        welcomSection.removeClass("content-hidden");
    }, 800);

    enterButton.on("click", function(){
        welcomSection.addClass("content-hidden").fadeOut();
        mainWrap.css('display','');
    });
});
