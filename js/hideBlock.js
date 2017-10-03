$(function($){
    $(document).mouseup(function (e){
        let div = $('#task_popup');
        let shadow = $('#shadow');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('task__popup--active');
            shadow.removeClass('shadow--active');
        }
    });
});

$(function($){
    $(document).mouseup(function (e){
        let div = $('#popup');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('#newtask_popup').removeClass('creator-newtask__popup--active');
            $('#main_popup').removeClass('popup-hide');
            $('#popup_translator').removeClass('popup-show');
            $('#popup_developer').removeClass('popup-show');
        }
    });
});

$(function($){
    $(document).mouseup(function (e){
        let div = $('#short_task');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('header-short-task__container--active');
        }
    });
});

$(function($){
    $(document).mouseup(function (e){
        let div = $('#header_setting');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('header__setting--active');
        }
    });
});