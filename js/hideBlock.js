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