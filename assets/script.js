window.onload = function () {
    document.querySelector('.container-mobile-nav').style.display = 'none';
    document.querySelector('.fa-bars').onclick = function () {
        this.style.display = 'none';
        document.querySelector('.blueasy-title-header').style.display = 'none';
        document.querySelector('.container-mobile-nav').style.display = 'flex';
        document.querySelector('.fa-close').onclick = function () {
            document.querySelector('.blueasy-title-header').style.display = 'block';
            document.querySelector('.container-mobile-nav').style.display = 'none';
            document.querySelector('.fa-bars').style.display = 'block';
        }
    }
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    console.log(x + ' × ' + y);

    if (x > 1224) {
        var portNav = document.querySelectorAll(".nav-links-portfolio");
        for (var i in portNav) {
            portNav[i].onclick = function () {
                var html = this.innerHTML;
                var portImg = document.querySelectorAll(".portfolio-img");
                for (var h in portImg) {
                    var classes = portImg[h].classList;
                    for (var t in classes) {
                        console.log(classes[t]);
                    }
                }

            }
        }
    }
}