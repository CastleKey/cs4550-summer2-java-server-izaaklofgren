(function() {

    var userServiceClient = new UserServiceClient();
    // var $updateBtn = jQuery('#updateBtn');
    // var $createBtn = jQuery('#createBtn');
    var $updateBtn;
    var $createBtn;
    var idFld = $('#id');
    var usernameFld = $('#username');
    var passwordFld = $('#password');
    var firstNameFld = $('#firstName');
    var lastNameFld = $('#lastName');
    var emailFld = $('#email');
    var roleFld = $('#role');

    //updateBtn.click(loginHandler);
    //createBtn.click(registerHandler);

    function init() {
        $updateBtn = $("#updateBtn");
        $createBtn = $("#createBtn");

        $updateBtn.click(updateUser);
        $createBtn.click(registerHandler)

        userServiceClient
            .findAllUsers()
            .then(renderUsers);
    }
    init();

    function renderUsers(users) {
        console.log(users);

        var tbody = $('tbody');
        tbody.empty();
        for (var i = 0; i < users.length; i++) {
            var user = users[i];

            var tr = $('<tr>');
            var td = $('<td>');
            td.append(user.id);
            tr.append(td);

            td = $('<td>');
            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append(user.password);
            tr.append(td);

            td = $('<td>');
            td.append(user.firstName);
            tr.append(td);

            td = $('<td>');
            td.append(user.lastName);
            tr.append(td);

            td = $('<td>');
            td.append(user.email);
            tr.append(td);

            td = $('<td>');
            td.append(user.role);
            tr.append(td);

            td = $('<td>');
            var deleteBtn = $('<button>DELETE</button>');
            deleteBtn.click(deleteUser);
            deleteBtn.attr('id', user.id);
            td.append(deleteBtn);
            tr.append(td);

            tr.appendTo(tbody);
        }
    }

    function deleteUser(event) {
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        userServiceClient
            .deleteUser(id)
            .then(function() {
                userServiceClient
                    .findAllUsers()
                    .then(renderUsers);
            });

    }

    function registerHandler(event) {
        event.preventDefault();

        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var firstNameStr = firstNameFld.val();
        var lastNameStr = lastNameFld.val();
        var emailStr = emailFld.val();
        var roleStr = roleFld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr,
            firstName: firstNameStr,
            lastName: lastNameStr,
            email: emailStr,
            role: roleStr
        };

        var userObjStr = JSON.stringify(userObj);

        userServiceClient
            .createUser(userObjStr)
            .then(function() {
                userServiceClient
                    .findAllUsers()
                    .then(renderUsers);
            });
    }

    function updateUser() {

        var idStr = idFld.val();
        var usernameStr = usernameFld.val();
        var passwordStr = passwordFld.val();
        var firstNameStr = firstNameFld.val();
        var lastNameStr = lastNameFld.val();
        var emailStr = emailFld.val();
        var roleStr = roleFld.val();

        var user = {
            username: usernameStr,
            password: passwordStr,
            firstName: firstNameStr,
            lastName: lastNameStr,
            email: emailStr,
            role: roleStr
        };

        //var userObjStr = JSON.stringify(user);

        userServiceClient
            .updateUser(idStr, user)
            .then(function() {
                userServiceClient
                    .findAllUsers()
                    .then(renderUsers);
            });
    }

})();
