//Lấy dữ liệu từ API
var requestUrl = 'https://6244b3af7701ec8f72488407.mockapi.io/api/v1/Project_C4EJS127';
fetch(requestUrl, {
    method: 'GET'
}).then(response => response.json()) 
  .then(data => {
    const emailHTML = document.getElementById('login_email')
    const passwordHTML = document.getElementById('login_password')
    const loginHTML = document.getElementById('login')
    const errorHTML = document.getElementById('error')
    // const errorAPI = document.getElementsByClassName('errorAPI')
    loginHTML.addEventListener('submit', (e) => {
        e.preventDefault()
        let messages = [] 
        if (emailHTML.value === '' || emailHTML.value == null) {
        messages.push('Email cannot be blank')
        }
        if (passwordHTML.value.length < 8) {
        messages.push('Password must be at least 8 characters.')
        }
        if (passwordHTML.value === 'password') {
        messages.push('Password cannot be "password".')
        }
        if (messages.length > 0) {
        errorHTML.innerText = messages.join(', ')
        } 
        if (messages.length == 0) {
            let isExistMail = false;
            for (let x of data) {
                if (x.email === emailHTML.value) {
                    isExistMail = true;
                    if (x.password === passwordHTML.value) {
                        window.location.href = "../soundofvn/sound.html";
                        localStorage.setItem('loginSucces', JSON.stringify({email:emailHTML.value, status: true}));
                        break;
                    } else {
                        errorHTML.innerText = 'Password is incorrect, please try again!';
                        break;
                    }   
                }
            }
            if(isExistMail === false) {
                errorHTML.innerText = 'Your email is not registered.';
            }
        }    
    })
})
function myFunction() {
    var y = document.getElementById("myTopnav");
    if (y.className === "header") {
      y.className += " responsive";
    } else {
      y.className = "header";
    }
  }
   


    


  