$(function($){
    $(document).mouseup(function (e){
        let div = $('#short_task');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('header-short-task__container--active');
        }
    });
});