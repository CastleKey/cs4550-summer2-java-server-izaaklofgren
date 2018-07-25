(function () {
    function init() {
        findAllUsers()
            .then(renderUsers);
    }
    init();

    function findAllUsers() {
        var url = "/api/user";
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    function renderUsers(users) {
        console.log(users);

        var tbody = $('tbody');
        tbody.empty();
        for (var i=0; i<users.length; i++) {
            var user = users[i];

            var tr = $('<tr>');
            var td = $('<td>');
            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append('*******');
            tr.append(td);

            td = $('<td>');
            td.append(user.firstName);
            tr.append(td);

            td = $('<td>');
            td.append(user.lastName);
            tr.append(td);

            td = $('<td>');
            td.append('someone@email.com');
            tr.append(td);

            td = $('<td>');
            td.append('student');
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

        var url = "/api/user/" + id;
        fetch(url, {
            method: 'delete'
        })
            .then(function () {
                findAllUsers()
                    .then(renderUsers);
            });

    }

})();