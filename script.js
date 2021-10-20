
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onload = function() {
    console.log(this);
    let response = JSON.parse(this.responseText);
    console.log(response);

    for ( var i = 0; 1 < response.length; i++ ) {
        document.getElementById('user').innerHTML = 
            document.getElementById('user').innerHTML +
            '<li>

                ${response[i].name}
                <a href="https://jsonplaceholder.typicode.com/users/${response[1].id}"
                class="user">Edit Details</a>
            </li>';
    }
}

xhr.send(;)