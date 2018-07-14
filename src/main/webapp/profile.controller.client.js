(function () {
    function init() {
        findUserById(7)
    }

    function findUserById(userId) {
        return fetch('/api/user/' + userId)
            .then(handleResponse)
    }

    function handleResponse() {

    }
})();