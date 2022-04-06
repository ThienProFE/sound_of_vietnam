function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
    x.className += " responsive";
    } else {
    x.className = "header";
    }
}
const request = document.getElementById("request");
const input = document.querySelectorAll(".main_form_input");
const error = document.getElementById("error");
const textarea = document.querySelector(".main_form_textarea");
request.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i of input) {
        if (i.value === "" || i.value === null) {
            error.innerText = "You need to fill information in the field marked *";
            break;
        } else {
            fetch('https://6244b3af7701ec8f72488407.mockapi.io/api/v1/request_sound', {
                method: 'POST',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: JSON.parse(localStorage.getItem("loginSucces")).email, type: input[0].value, place: input[1].value, story: textarea.value})
                }).then(res => res.json())
                .then(res => {
                    console.log(res);
                    window.location.href = "./request_tk.html";
                })
                .catch((error)=>console.log(error))
            break;
        }
    }
});