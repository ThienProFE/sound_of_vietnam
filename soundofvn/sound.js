window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const images = document.querySelectorAll(".hn");
    const volRange = document.querySelectorAll(".volume");
    const music = document.querySelectorAll(".music");
    const categories = document.querySelectorAll("#btn .cities");
    
Array.from(categories).forEach(function (element) {
  element.addEventListener("click", function (event) {
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove("what");
    }
    this.classList.add("what");
    let city_filter = element.dataset.filter;
    Array.from(music).forEach(function (el) {
      if (el.dataset.item === city_filter || el.dataset.type === city_filter) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
  });
});
images.forEach((image, index) =>{
image.addEventListener("click", function () {
    if(sounds[index].paused || sounds[index].currentTime <= 0){
      sounds[index].play();
      images[index].classList.add("img-filter");
      volRange[index].addEventListener("input", function(e){
      sounds[index].volume = volRange[index].value / 100;
      }, false)
      volRange[index].classList.add("ngot");
    } else{
        sounds[index].pause();
        images[index].classList.remove("img-filter");
        volRange[index].classList.remove("ngot");
    }
});
});
});

//JS phần Heading
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header") {
  x.className += " responsive";
  } else {
  x.className = "header";
  }
}

//JS bảng xếp hạng
const listSounds = [
  {
    name: "1-hn-coffee-shop", 
    listen: 0
  },
  {
    name: "2-hn-west-lake", 
    listen: 0
  }, 
  {
    name: "3-hn-west-rain", 
    listen: 0
  },
  {
    name: "4-hn-traffic", 
    listen: 0
  },
  {
    name: "5-hn-market", 
    listen: 0
  },
  {
    name: "6-saigon-cafe", 
    listen: 0
  },
  {
    name: "7-saigon-street", 
    listen: 0
  },
  {
    name: "8-sai-gon-rain", 
    listen: 0
  },
  {
    name: "9-saigon-market", 
    listen: 0
  },
  {
    name: "10-sai-gon-night-life", 
    listen: 0
  },
  {
    name: "11-Phu quoc beach", 
    listen: 0
  },
  {
    name: "12-phu-quoc-fishing", 
    listen: 0
  },
  {
    name: "13-da-nang-beach", 
    listen: 0
  },
  {
    name: "14-hoi-an", 
    listen: 0
  },
  {
    name: "15-da-nang-city", 
    listen: 0
  },
  {
    name: "16-sapa sound", 
    listen: 0
  },
  {
    name: "17-fansipan", 
    listen: 0
  }, 
  {
    name: "18-sapa-love-market", 
    listen: 0
  },
  {
    name: "19-nha-trang-beach", 
    listen: 0
  },
  {
    name: "20-da-lat", 
    listen: 0
  },
  {
    name: "21-ninh-binh.", 
    listen: 0
  },
]
const hn = document.querySelectorAll(".hn");
const trend = document.getElementById('trend');
const music = document.querySelectorAll(".music");
Array.from(hn).forEach((image, index)=>{
  image.addEventListener("click", function () {
    listSounds[index].listen += 1;
    fetch('https://6244b3af7701ec8f72488407.mockapi.io/api/v1/ListSounds/'+(index+1), {
      method: 'PUT',
      headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({listen: listSounds[index].listen})
      }).then(res => res.json())
      .then(res => {console.log(res);
      })
      .catch((error)=>console.log(error))
  })
});

var requestUrl = 'https://6244b3af7701ec8f72488407.mockapi.io/api/v1/ListSounds';
fetch(requestUrl, {
    method: 'GET'
}).then(response => response.json())
  .then(data => {
    data.sort((a,b) => b.listen - a.listen);
    console.log(data);
    for (let i = 0; i < 5; i++) {
      music[data[i].id-1].classList.add('trending');
      let trending = document.querySelectorAll('.trending');
      trend.addEventListener('click', () => {
        Array.from(trending).forEach(function (value) {
          value.style.display = '';
        })
      })
    }  
  });
  const nav_left = document.querySelector('.nav_left');
  let hello = document.querySelector('#hello');
  let obj = JSON.parse(localStorage.getItem("loginSucces"));
    if(!obj) {
      nav_left.style.display = 'none';
    } else {
      hello.innerText = "Welcome, " + obj.email;
    }  
  
     


