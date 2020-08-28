document.getElementById('loginform').onsubmit = function(event) {
    event.preventDefault()

    let xhr = new XMLHttpRequest();

    xhr.open(this.method, this.action);
    xhr.send(new FormData(this));

    xhr.onload = function () {
        if (xhr.status == 200) {
            var obj = JSON.parse(xhr.response);
            document.getElementById('response').innerHTML = obj.response;
        }else {
            console.log(xhr.statusText)
        }
    };
}