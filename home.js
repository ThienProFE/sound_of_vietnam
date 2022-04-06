function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header") {
    x.className += " responsive";
    } else {
    x.className = "header";
    }
};
const email = document.querySelector(".footer_news_email");
const join = document.getElementById("join");
join.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value === "" || email.value === null) {
        alert("Please enter your email.")
    } else {
    fetch('https://624d41f9c172b69d692fe4fd.mockapi.io/api/v1/daily_email', {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email.value})
        }).then(res => res.json())
        .then(res => {
            console.log(res);
            alert("You have successfully applied your email!");
        })
        .catch((error)=>console.log(error))
    }
})