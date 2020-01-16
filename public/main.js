const url = "http://localhost:8080/";
const button = document.querySelector('button');
const responseArea = document.querySelector('p');

// Send get request using xhr
const sendRequest = () => {
    const xhr = new XMLHttpRequest();
    const path = 'button';
    xhr.responseType = 'text';
    xhr.onreadystatechange = ()=>{
    if (xhr.readyState === XMLHttpRequest.DONE) {
        responseArea.innerHTML = xhr.responseText;
    }
    };
    xhr.open('GET', url+path);
    xhr.send();
}

// Associate the click event to the sending request action
button.onclick = sendRequest;