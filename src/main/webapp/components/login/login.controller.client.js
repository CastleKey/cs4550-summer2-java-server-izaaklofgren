// (function () {
//     var $username,
//         $password,
//         $loginBtn;
//
//     function init() {
//         $username = $('#username');
//         $password = $('#password');
//         $loginBtn = jQuery$('#loginBtn');
//
//         $loginBtn.click(login);
//     }
//     init();
//
//     function login() {
//         var user = {
//             'username': $username.val(),
//             "password": $password.val()
//         };
//         fetch('/login', {
//             method: 'post',
//             body: JSON.stringify(user),
//             credentials: 'include',
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }).then(navigateToProfile);
//     }
//
//     function navigateToProfile() {
//         window.location.href = '/profile.template.client.html';
//     }
// })();


(function () {
    var loginBtn = jQuery('#loginBtn');
    var usernameFld = $('#username');
    var passwordFld = $('#password');

    loginBtn.click(loginHandler);

    function loginHandler() {
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr
        }

        var userObjStr = JSON.stringify(userObj);

        fetch('/login', {
            method: 'post',
            body: userObjStr,
            headers: {
                'content-type': 'application/json'
            },
            'credentials': 'include'
        }).then(navigateToProfile)

        function navigateToProfile() {
            window.location.href = 'profile.template.client.html';
        }

    }
})();
