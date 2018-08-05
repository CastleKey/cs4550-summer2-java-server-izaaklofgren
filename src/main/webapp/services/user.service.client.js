function UserServiceClient() {

    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;

    function deleteUser(id) {
        var url = "/api/user/" + id;
        return fetch(url, {
            method: 'delete'
        })
    }

    function findAllUsers() {
        var url = "/api/user";
        return fetch(url)
            .then(function (response) {
                return response.json();
            });
    }
}