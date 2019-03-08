window.onload = function() {
    searchEffect()
    timeBack()
}

function searchEffect() {
    var banner = document.querySelector('.jd_banner')
    var bannerHeight = banner.offsetHeight
    var search = document.querySelector('.jd_search')
    window.onscroll = function() {
        // console.log(bannerHeight)
        // 获取当前屏幕滚动时，banner滚动出屏幕的距离
        var offsetTop = document.documentElement.scrollTop
        // console.log(offsetTop)
        var opacity = 0
        if(offsetTop <= bannerHeight) {
            opacity = offsetTop/bannerHeight
            search.style.backgroundColor = 'rgba(233, 35, 34, '+opacity+')'
            console.log(123)
        }
    }
}

function timeBack() {
    var spans = document.querySelector('.jd_sk_time').querySelectorAll('span')
    // 设置起始的倒计时时间
    var totalTime = 10
    var timerId = setInterval(function() {
        totalTime--
        // 判断倒计时是否已经完成
        if(totalTime < 0) {
            clearInterval(timerId)
            return
        }
        // 获取剩余时间的时分秒
        var hour = Math.floor(totalTime/3600)
        var minute = Math.floor(totalTime%3600/60)
        var second = Math.floor(totalTime%60)
        // 将对应的时分秒的值付给span
        spans[0].innerHTML = Math.floor(hour/10)
        spans[1].innerHTML = Math.floor(hour%10)
        spans[3].innerHTML = Math.floor(minute/10)
        spans[4].innerHTML = Math.floor(minute%10)
        spans[6].innerHTML = Math.floor(second/10)
        spans[7].innerHTML = Math.floor(second%10)
     }, 1000)
}


    



