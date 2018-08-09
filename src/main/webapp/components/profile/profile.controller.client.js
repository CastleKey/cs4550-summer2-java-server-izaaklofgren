(function () {

    var userServiceClient = new UserServiceClient();
    var $username, $password, $firstName, $lastName, $email, $role,
        $updateBtn;
    var currentUser = null;

    function init() {

        $username = $("#username");
        $password = $("#password");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $email = $("#email");
        $role = $("#role");
        $updateBtn = $("#updateBtn");

        $updateBtn.click(updateUser);

        profile()
            .then(renderUser);
    }
    init();

    function updateUser() {
        var user = {
            username: $username.val(),
            password: $password.val(),
            firstName: $firstName.val(),
            lastName: $lastName.val(),
            email: $email.val(),
            role: $role.val()
        };

        userServiceClient
            .updateUser(currentUser.id, user);
    }

    function renderUser(user) {
        currentUser = user;
        $username.val(user.username);
        $password.val(user.password);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        $email.val(user.email);
        $role.val(user.role);
    }

    function profile() {
        return fetch('/profile', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }

    function findUserById(userId) {
        userServiceClient
            .findUserById(userId);
    }

    function handleResponse() {

    }
})();
