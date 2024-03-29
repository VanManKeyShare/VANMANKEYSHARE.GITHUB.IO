! function() {
    "use strict";
    let e = (e, t = !1) => (e = e.trim(), t) ? [...document.querySelectorAll(e)] : document.querySelector(e),
        t = (t, i, l, o = !1) => {
            let s = e(i, o);
            s && (o ? s.forEach(e => e.addEventListener(t, l)) : s.addEventListener(t, l))
        },
        i = (e, t) => {
            e.addEventListener("scroll", t)
        },
        l = e("#navbar .scrollto", !0),
        o = () => {
            let t = window.scrollY + 200;
            l.forEach(i => {
                if (!i.hash) return;
                let l = e(i.hash);
                l && (t >= l.offsetTop && t <= l.offsetTop + l.offsetHeight ? i.classList.add("active") : i.classList.remove("active"))
            })
        };
    window.addEventListener("load", o), i(document, o);
    let s = t => {
            let i = e(t).offsetTop;
            window.scrollTo({
                top: i,
                behavior: "smooth"
            })
        },
        a = e(".back-to-top");
    if (a) {
        let n = () => {
            window.scrollY > 100 ? a.classList.add("active") : a.classList.remove("active")
        };
        window.addEventListener("load", n), i(document, n)
    }
    t("click", ".mobile-nav-toggle", function(t) {
        e("body").classList.toggle("mobile-nav-active"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x")
    }), t("click", ".scrollto", function(t) {
        if (e(this.hash)) {
            t.preventDefault();
            let i = e("body");
            if (i.classList.contains("mobile-nav-active")) {
                i.classList.remove("mobile-nav-active");
                let l = e(".mobile-nav-toggle");
                l.classList.toggle("bi-list"), l.classList.toggle("bi-x")
            }
            s(this.hash)
        }
    }, !0), window.addEventListener("load", () => {
        window.location.hash && e(window.location.hash) && s(window.location.hash)
    });
    let r = e("#preloader");
    r && window.addEventListener("load", () => {
        r.remove()
    });
    let c = e(".typed");
    if (c) {
        let d = c.getAttribute("data-typed-items");
        d = d.split(","), new Typed(".typed", {
            strings: d,
            loop: !0,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2e3
        })
    }
    let f = e(".skills-content");
    f && new Waypoint({
        element: f,
        offset: "80%",
        handler: function(t) {
            e(".progress .progress-bar", !0).forEach(e => {
                e.style.width = e.getAttribute("aria-valuenow") + "%"
            })
        }
    }), window.addEventListener("load", () => {
        let i = e(".portfolio-container");
        if (i) {
            let l = new Isotope(i, {
                    itemSelector: ".portfolio-item"
                }),
                o = e("#portfolio-flters li", !0);
            t("click", "#portfolio-flters li", function(e) {
                e.preventDefault(), o.forEach(function(e) {
                    e.classList.remove("filter-active")
                }), this.classList.add("filter-active"), l.arrange({
                    filter: this.getAttribute("data-filter")
                }), l.on("arrangeComplete", function() {
                    AOS.refresh()
                })
            }, !0)
        }
    }), GLightbox({
        selector: ".portfolio-lightbox"
    }), GLightbox({
        selector: ".portfolio-details-lightbox",
        width: "90%",
        height: "90vh"
    }), new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        }
    }), new Swiper(".testimonials-slider", {
        speed: 600,
        loop: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        }
    }), window.addEventListener("load", () => {
        AOS.init({
            duration: 1e3,
            easing: "ease-in-out",
            once: !0,
            mirror: !1
        })
    })
}();