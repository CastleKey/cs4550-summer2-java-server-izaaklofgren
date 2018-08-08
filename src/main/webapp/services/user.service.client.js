function UserServiceClient() {

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.login = login;
    this.url = 'http://localhost:8080/api/user';
    var self = this;

    function createUser(userObjStr) {
        return fetch('/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        });
    }

    function findAllUsers() {
        var url = "/api/user";
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }

    function findUserById(userId) {
        var url = "/api/user/" + userId;
        return fetch(url, {
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

    function login(userObjStr) {
        return fetch('/login', {
            method: 'post',
            body: userObjStr,
            headers: {
                'content-type': 'application/json'
            },
            'credentials': 'include'
        });
    }


    function deleteUser(id) {
        var url = "/api/user/" + id;
        return fetch(url, {
            method: 'delete'
        });
    }



    function updateUser(id, user) {
        return fetch("/api/user/" + id, {
            method: 'put',
            body: JSON.stringify(user),
            'credentials': 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}