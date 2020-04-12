// fullpage初始化
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    showActiveTooltip: true,
    navigationTooltips: ['WELCOME', 'PROFILE', 'SKILL', 'PROJECT', 'NOTE', 'PHOTO'],
    dragAndMove: true,
    anchors: ['WELCOME', 'PROFILE', 'SKILL', 'PROJECT', 'NOTE']
});

// AOS初始化
AOS.init();


//methods
// fullpage_api.setAllowScrolling(false);

// 首頁
let landing_div = document.querySelector('.landing_img_area');
window.addEventListener('resize', function () {
    set_min_height()
})
set_min_height();
function set_min_height() {
    let landing_img1 = document.querySelector('.landing_img1');
    let landing_img_height = landing_img1.offsetHeight;
    landing_div.setAttribute('style', `min-height:${landing_img_height}px;`)
}


// let landing_img1 = document.querySelector('.landing_img1');
// let landing_img2 = document.querySelector('.landing_img2');
// let landing_img3 = document.querySelector('.landing_img3');
// setTimeout(function (params) {
//     landing_img1.setAttribute('style', 'left:-70px')
//     landing_img2.setAttribute('style', 'left:70px')
// }, 1000)

// skill collapse
$('#fullpage').on('show.bs.collapse', function () {
    $('.collapse').collapse('hide');
})


let data = {
    "title": "welcome",
    "github_href":"https://github.com/AaaBin",
    "section": [
      "WELCOME",
      "PROFILE",
      "SKILL",
      "PROJECT",
      "NOTE"
    ],
    "project_content": {
      "project": [
        {
          "title": "spring mountain",
          "img": "",
          "content": "職訓時的團體專題，負責部分為網站後端，使用框架為laravel。",
          "tags": [
            "laravel",
            "REST",
            "api",
            "ORM",
            "queue",
            "ajax、axios",
            "fullcalendar"
          ]
        },
        {
          "title": "後端實作",
          "img": "",
          "content": "學習後端時的練習作品。",
          "tags": [
            "laravel",
            "購物車系統",
            "金流串接"
          ]
        },
        {
          "title": "Yuanchia(未完成)",
          "img": "",
          "content": "職訓，個人專題，以沒有網站或網站老舊的商家為主題",
          "tags": [
            "bootstrap",
            "parallax.js",
            "flex"
          ]
        },
        {
          "title": "Fluent Design",
          "img": "",
          "content": "職訓，仿切練習",
          "tags": [
            "RWD",
            "SCSS",
            "lax.js",
            "AOS.js"
          ]
        },
        {
          "title": "Microsoft",
          "img": "",
          "content": "職訓，仿切練習",
          "tags": [
            "flex",
            "RWD"
          ]
        },
        {
          "title": "KJ Engineering",
          "img": "",
          "content": "職訓，以mobirise速成畫面，再進行個人化的修改。",
          "tags": [
            "mobirise",
            "AOS.js",
            "hover.css"
          ]
        },
        {
          "title": "weather API",
          "img": "",
          "content": "職訓，以氣象局開放之API配合JS樣板字串來產生畫面。",
          "tags": [
            "api",
            "JS template literals"
          ]
        },
        {
          "title": "Flex",
          "img": "",
          "content": "職訓，以flex屬性作切版練習",
          "tags": [
            "RWD",
            "flex"
          ]
        }
      ]
    },
    "note_content":[
      {
        "title":"Vue全家桶跟著做",
        "date":"20200406",
        "tag":"Vue",
        "href":""
      },
      {
        "title":"Laravel:Send Mail With Queue",
        "date":"20200328",
        "tag":"Laravel",
        "href":""
      },
      {
        "title":"JS:what is this",
        "date":"20200404",
        "tag":"JavaScript",
        "href":""
      },
      {
        "title":"aws EC2 連線與檔案上傳",
        "date":"20200406",
        "tag":"aws",
        "href":""
      }
      ]
  }

let vm = new Vue({
    el: "#prolect_container",
    data: data,
    computed:{
        project(){
            return this.project_content.project
        }
    }
});


let vm2 = new Vue({
  el:"#header",
  data:data
})