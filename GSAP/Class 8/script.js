function page1Animation(){
    var tl = gsap.timeline();


    tl.from("nav h1, nav h4, nav button", {
        y :-30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    })

    tl.from(".center-part-1 h1", {
        duration: 0.5,
        x: -300,
        opacity: 0,
    })
    tl.from(".center-part-1 p", {
        duration: 0.4,
        x: -100,
        opacity: 0,
    })

    tl.from(".center-part-1 button", {
        duration: 0.4,
        x: -100,
        opacity: 0,
    })


    tl.from(".center-part-2 svg", {
        duration: 0.4,
        opacity: 0,
    }, "-=1")



    tl.from(".company svg", {
        duration: 0.6,
        opacity: 0,
        y: 30,
        stagger: 0.2,
    })
}


function page2Animation(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            scroller: "body",
            start: "top 80%",
            scrub: 2,
            end: "top 0%",
        }
    })

    tl.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".left.elem.line1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    }, "line1")

    tl.from(".right.elem.line1", {
        x: 300,
        opacity: 0,
        duration: 0.5,
    }, "line1")


    tl.from(".left.elem.line2", {
        x: -300,
        opacity: 0, 
        duration: 0.5,
    }, "line2")

    tl.from(".right.elem.line2", {
        x: 300,
        opacity: 0,
        duration: 0.5,
    }, "line2")
}
page1Animation();
page2Animation();