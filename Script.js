var tl=gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
});

tl.to("#fanta",{
    top:"115%",
    left:"8%"
},"orange")
tl.to("#orangecut",{
    top:"160%",
    left:"20%"
},"orange")
tl.to("#orange",{
    width:"15%",
    top:"160%",
    right:"10%"
},"orange")
tl.to("#leaf1",{
    width:"12%",
    rotate:"120deg",
    top:"118%",
    left:"73%"
},"orange")
tl.to("#leaf2",{
    width:"12%",
    rotate:"180deg",
    top:"110%",
    left:"1%"
},"orange")

var tl2=gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true,
    }
});

tl2.from("#coco",{
    rotate: "-90deg" ,
     left: "-50%",
      top: "150%",
},"banana")

tl2.from("#pepsifruit",{
    rotate: "-90deg" ,
     right: "-50%",
      top: "150%",
},"banana")
tl2.to("#fanta",{
    width:"16vw",
    top:"210%",
    left:"42%"
},"banana")
tl2.to("#orangecut",{
    width:"20vw",
    top:"200%",
    left:"40%"
},"banana")
