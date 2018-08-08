(function () {

    var userServiceClient = new UserServiceClient();
    var $username, $firstName, $lastName,
        $updateBtn;
    var currentUser = null;

    function init() {

        $username = $("#username");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $updateBtn = $("#updateBtn");

        $updateBtn.click(updateUser);

        profile()
            .then(renderUser);
    }
    init();

    function updateUser() {
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        };

        userServiceClient
            .updateUser(currentUser.id, user);
    }

    function renderUser(user) {
        currentUser = user;
        $username.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
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
        // return fetch('/api/user/' + userId)
        //     .then(function (response) {
        //         return response.json();
        //     });
    }

    function handleResponse() {

    }
})();