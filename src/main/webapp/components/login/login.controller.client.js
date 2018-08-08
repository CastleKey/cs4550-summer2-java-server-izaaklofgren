(function () {

    var userServiceClient = new UserServiceClient();
    var loginBtn = jQuery('#loginBtn');
    var usernameFld = $('#username');
    var passwordFld = $('#password');

    loginBtn.click(loginHandler);

    function loginHandler() {
        event.preventDefault();
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr
        };

        var userObjStr = JSON.stringify(userObj);

        userServiceClient
            .login(userObjStr)
            .then(navigateToProfile);

    }
    function navigateToProfile() {
        window.location.href = '../profile/profile.template.client.html';
    }
})();
