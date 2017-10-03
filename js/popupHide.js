$(function($){
    $(document).mouseup(function (e){
        let div = $('#popup');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('#newtask_popup').removeClass('creator-newtask__popup--active');
            $('#main_popup').removeClass('popup-hide');
            $('#popup_translator').removeClass('popup-show');
            $('#popup_developer').removeClass('popup-show');
            $('#popup_developer').removeClass('popup-show');
        }
    });
});