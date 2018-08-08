// IIFE

(function () {

    var userServiceClient = new UserServiceClient();
    var registerBtn = jQuery('#registerBtn');
    var usernameFld = $('#username');
    var passwordFld = $('#password');
    var password2Fld = $('#password2');

    registerBtn.click(registerHandler);

    function registerHandler(event) {
        event.preventDefault();
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var password2Str = password2Fld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr
        };

        var userObjStr = JSON.stringify(userObj);

        userServiceClient
            .createUser(userObjStr)
            .then(registrationSuccessful, registrationFailed)

        // fetch('/register', {
        //     method: 'post',
        //     body: userObjStr,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     'credentials': 'include'
        // }).then(registrationSuccessful, registrationFailed)
    }

    function registrationSuccessful() {
        window.location.href = '../profile/profile.template.client.html';
    }

    function registrationFailed() {
        alert('Uh oh');
    }
})();
