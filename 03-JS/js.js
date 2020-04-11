// fullpage初始化
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    showActiveTooltip: true,
    navigationTooltips: ['WELCOME', 'PROFILE', 'SKILL', 'PROJECT', 'NOTE', 'PHOTO'],
    dragAndMove: true,
});

//methods
// fullpage_api.setAllowScrolling(false);

// 首頁
let landing_img1 = document.querySelector('.landing_img1');
let landing_img2 = document.querySelector('.landing_img2');
let landing_img3 = document.querySelector('.landing_img3');
setTimeout(function (params) {
    landing_img1.setAttribute('style', 'left:-70px')
    landing_img2.setAttribute('style', 'left:70px')
}, 1000)

// skill collapse
$('#fullpage').on('show.bs.collapse', function () {
    $('.collapse').collapse('hide');
})