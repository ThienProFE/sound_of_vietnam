var requestUrl = 'https://6244b3af7701ec8f72488407.mockapi.io/api/v1/Project_C4EJS127';
fetch(requestUrl, {
    method: 'GET'
}).then(response => response.json())
  .then(data => {
    const emailHTML = document.getElementById('register_email')
    const passwordHTML = document.getElementById('register_password')
    const repasswordHTML = document.getElementById('register_repassword')
    const registerHTML = document.getElementById('register')
    const error = document.getElementById('error')
    registerHTML.addEventListener('submit', (e) => {
        e.preventDefault();
        let messages = []
        if (emailHTML.value === '' || emailHTML.value == null) {
            messages.push('Email cannot be blank')
        }
        if (passwordHTML.value.length < 8) {
            messages.push('Password must be at least 8 characters')
        }
        if (repasswordHTML.value!==passwordHTML.value) {
            messages.push('The re-entered password is incorrect.')
        }
        if (passwordHTML.value === 'password') {
            messages.push('Password cannot be "password".')
        }
        if (messages.length > 0) {
            error.innerText = messages.join(', ')
        }
        if (messages.length == 0) {
            let isEmail = false;
            for (let x of data) {
                if (x.email === emailHTML.value) {
                    isEmail = true;
                } 
            } 
            if(isEmail){
                error.innerText = "That email is taken. Try another!"
            }
            else {
                // console.log("Chưa tồn tại")
                fetch('https://6244b3af7701ec8f72488407.mockapi.io/api/v1/Project_C4EJS127', {
                        method: 'POST',
                        headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email: emailHTML.value, password: passwordHTML.value})
                        }).then(res => res.json())
                        .then(res => {
                            console.log(res);
                            window.location.href = "../login/login.html"
                        })
                        .catch((error)=>console.log(error))
            }
        }  
    })
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}    

// /*if(JSON.parse(localStorage.getItem("loginSuccess"))){
//     window.location.href = "../soundofvn/sound.html";
// 
