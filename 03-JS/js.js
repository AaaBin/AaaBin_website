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



axios.get('http://ec2-3-17-155-235.us-east-2.compute.amazonaws.com/api/file/get/2', {
})
  .then(function (response) {
    // handle success
    console.log(response.data);
    const json_data = response.data;

    let vm = new Vue({
      el: "#prolect_container",
      data: json_data,
      computed: {
        project() {
          return this.project_content.project
        }
      }
    });

    let vm2 = new Vue({
      el: "#header",
      data: json_data
    })



  });



// skill collapse
$('#fullpage').on('show.bs.collapse', function () {
  $('.collapse').collapse('hide');
})

