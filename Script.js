var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "115%",
    left: "8%",
  },
  "orange"
);
tl.to(
  "#orangecut",
  {
    top: "160%",
    left: "20%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf1",
  {
    width: "12%",
    rotate: "120deg",
    top: "118%",
    left: "73%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    width: "12%",
    rotate: "180deg",
    top: "110%",
    left: "1%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.from(
  "#coco",
  {
    rotate: "-90deg",
    left: "-50%",
    top: "150%",
  },
  "banana"
);

tl2.from(
  "#pepsifruit",
  {
    rotate: "-90deg",
    right: "-50%",
    top: "150%",
  },
  "banana"
);
tl2.to(
  "#fanta",
  {
    width: "16vw",
    top: "210%",
    left: "42%",
  },
  "banana"
);
tl2.to(
  "#orangecut",
  {
    width: "20vw",
    top: "200%",
    left: "40%",
  },
  "banana"
);

let mm = gsap.matchMedia();
mm.add("(min-width: 267px) and (max-width: 671px)", () => {
  var tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "50% 50%",
      scrub: true,
      markers: true,
    },
  });

  tlMobile.to(
    "#fanta",
    {
        top: "122%",
        left: "44%",
       
        width: "36.1071vw",
    },
    "orange"
  );
  tlMobile.to(
    "#orangecut",
    {
      left: "65%",
      top: "143%",
      width: "25vw",
    },
    "orange"
  );
  tlMobile.to(
    "#orange",
    {
      right: "0%",
      top: "180%",
      width: "30%",
    },
    "orange"
  );
  tlMobile.to(
    "#leaf1",
    {
      width: "35%",
      top: "125%",
    },
    "orange"
  );
  tlMobile.to(
    "#leaf2",
    {
      left: "1%",
      top: "137%",
      width: "25%",
    },
    "orange"
  );
  var tl2Mobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "-20% 95%",
      end: "70% 50%",
      scrub: true,
    //   markers: true,
    },
  });
  tl2Mobile.to(
    "#fanta",
    {
      left: "40%",
      top: "230%",
      width: "21vw",
    },
    "banana"
  );
  tl2Mobile.to(
    "#orangecut",
    {
      left: "33%",
      top: "225%",
      width: "35vw",
    },
    "banana"
  );
  tl2Mobile.to(
    "#coco",
    {
      top: "-19%",
      left: "-27%",
      width: "42vw",
    },
    "banana"
  );
  tl2Mobile.to(
    "#pepsifruit",
    {
      top: "-20%",
      right:"-22%",
      width: "42vw",
    
    },
    "banana"
  );
});

// mm.add("(max-width: 990px)", () => {
//     var tlMobile = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".two",
//         start: "0% 95%",
//         end: "70% 50%",
//         scrub: true,
//         // markers: true,
//       },
//     });
  
//     tlMobile.to(
//       "#fanta",
//       {
//         left: "8%",
//         top: "132%",
//         width: "30vw",
//       },
//       "orange"
//     );
//     tlMobile.to(
//       "#orangecut",
//       {
//         left: "25%",
//         top: "164%",
//         width: "25vw",
//       },
//       "orange"
//     );
//     tlMobile.to(
//       "#orange",
//       {
//         right: "1.0069%",
//         top: "178%",
//         width: "25%",
//       },
//       "orange"
//     );
//     tlMobile.to(
//       "#leaf1",
//       {
//         width: "15%",
//         top: "128%",
//       },
//       "orange"
//     );
//     tlMobile.to(
//       "#leaf2",
//       {
//         left: "1%",
//         top: "126%",
//         width: "25%",
//       },
//       "orange"
//     );
//     var tl2Mobile = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".three",
//         start: "0% 95%",
//         end: "70% 50%",
//         scrub: true,
//         // markers: true,
//       },
//     });
//     tl2Mobile.to(
//       "#fanta",
//       {
//         left: "44%",
//         top: "213%",
//         width: "15vw",
//       },
//       "banana"
//     );
//     tl2Mobile.to(
//       "#orangecut",
//       {
//         left: "38%",
//         top: "209%",
//         width: "26vw",
//       },
//       "banana"
//     );
//     tl2Mobile.to(
//       "#coco",
//       {
//         top: "-19%",
//         left: "-25%",
//         width: "35vw",
//       },
//       "banana"
//     );
//     tl2Mobile.to(
//       "#pepsifruit",
//       {
//         top: "-20%",
//         right:"-25%",
//         width: "35vw",
      
//       },
//       "banana"
//     );
//   });
  