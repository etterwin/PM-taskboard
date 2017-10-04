function getFormData(form) {
    var data = {};
    $(form).find('input, select').each(function() {
        if (this.tagName.toLowerCase() == 'input') {
            if (this.type.toLowerCase() == 'checkbox') {
                data[this.name] = this.checked;
            } else if (this.type.toLowerCase() != 'submit') {
                data[this.name] = this.value;
            }
        } else {
            data[this.name] = this.value;
        }
    });
    return data;
}


function addFormError(formRow, errorMsg) {
    var errorMSG = '<span class="error-msg">' + errorMsg + '</span>';
    $(formRow).parents('.form-group').addClass('has-error');
    $(formRow).parents('.form-group').append(errorMSG);
    $('#sign').removeClass('sign-effect-in');
    $('#sign').addClass('shakeit');
    setTimeout(function() {
        $('#sign').removeClass('shakeit');
    }, 300);
}

function form_handler(form_name, custom_validation, success_message, error_message, success_function, error_function) {
    $(form_name).find('input[type="submit"]').on('click', function(e) {

        window.onbeforeunload = null;

        $(form_name).find('.form-group .error-msg').remove();
        var submitButton = this;
        submitButton.disabled = true;

        var form = $(form_name)[0];
        if (custom_validation != null) {
            if (!custom_validation(form, getFormData(form))) {
                submitButton.disabled = false;
                return false;
            }
        }
        e.preventDefault();
    });
    $(document).click(function(e) {
        if ($(e.target).closest(form_name).length) {
            $(form_name).find('.form-group').removeClass('has-error');
            setTimeout(function() {
                $(form_name).find('.form-group .error-msg').remove();
            }, 300);
        } else {
            return
        }
    });
}

// LOGIN FORM: Validation function
function validate_login_form(form, data) {
    if (data.email == "") {
        addFormError(form["email"], 'Email пуст');
        return false;
    }

    if (data.password == "") {
        addFormError(form["password"], 'Пароль пуст');
        return false;
    }

    $('#sign').removeClass('sign-effect-in').removeClass('shakeit');
    $('#sign').addClass('sign-effect-out');

    $('#successful_login').addClass('active');
    //return true;
}

var Regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validate_registration_form(form, data) {
    if (data.user_username == "") {
        addFormError(form["user_username"], 'Введите имя');
        return false;
    }

    if (data.user_email == "") {
        addFormError(form["user_email"], 'Введите email');
        return false;
    }

    if (!Regex.test(form.user_email.value)) {
        addFormError(form["user_email"], 'Некорректный email');
        return false;
    }

    if (data.user_password == "") {
        addFormError(form["user_password"], 'Введите пароль');
        return false;
    }

    if (data.user_cnf_password == "" || data.user_password != data.user_cnf_password) {
        addFormError(form["user_cnf_password"], "Пароли не совпадают");
        return false;
    }

    if (data.user_phone == "") {
        addFormError(form["user_phone"], 'Введите телефон');
        return false;
    }


    $('#sign').removeClass('sign-effect-in').removeClass('shakeit');
    $('#sign').addClass('sign-effect-out');

    $('#successful_registration').addClass('active');

}

form_handler("#login_form", validate_login_form, null, null, null, null, null, null);
form_handler("#register_form", validate_registration_form, null, null, null, null, null, null);

var dialogBox = $('#sign');

dialogBox.on('click', 'a.actions', function() {
    dialogBox.toggleClass('flip');
});

$('#successful_login,#successful_registration').on('click', 'a.dialog-reset', function() {
    $('#successful_login,#successful_registration').removeClass('active');
    dialogBox.removeClass('sign-effect-out').addClass('sign-effect-in');
    document.getElementById('login_form').reset();
    document.getElementById('register_form').reset();
});
