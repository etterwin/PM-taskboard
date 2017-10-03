function closePopup() {
    document.getElementById('newtask_popup').classList.remove('creator-newtask__popup--active');
    document.getElementById('main_popup').classList.remove('popup-hide');
    document.getElementById('popup_translator').classList.remove('popup-show');
    document.getElementById('popup_developer').classList.remove('popup-show');
    document.getElementById('popup_developer').classList.remove('popup-show');
}

function openTranslator() {
    document.getElementById('popup_translator').classList.add('popup-show');
    document.getElementById('main_popup').classList.add('popup-hide');
}

function openDeveloper() {
    document.getElementById('popup_developer').classList.add('popup-show');
    document.getElementById('main_popup').classList.add('popup-hide');
}


function showSearchField() {
    document.getElementById('header_search_content').classList.toggle('header-search__content--active');
}

function schowTaskDescription() {
    document.getElementById('task_body').classList.toggle('task__body--active');
}

function createNewTask() {
    document.getElementById('newtask_popup').classList.toggle('creator-newtask__popup--active');
}

function showShortTasks() {
    document.getElementById('short_task').classList.add('header-short-task__container--active');
}