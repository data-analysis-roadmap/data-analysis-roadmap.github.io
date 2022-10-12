
console.clear();

gsap.timeline({
  defaults:{ ease: 'none' }, 
  scrollTrigger:{
    trigger:'#wrap', 
    pin: true,
    start:'top 50%', 
    end: '+=3000' ,  // value for 'speed'
    scrub: true, // important !
    pinSpacing: false,
    onUpdate: ({progress}) => {

      // move the SVG so that the moving 'point' 
      // remains at the same level of viewport'.

      const ySet = gsap.quickSetter('#movingSVG', "y", "px");

      posY = gsap.getProperty('#point', 'y');

      ySet(-posY);

      // info for position = progress
      console.log(progress)
    }
  }
})
 .to('#point', {
  motionPath:{
    path: "#motionP",
    align: "#motionP",
    alignOrigin: [ 0.5, 0.5 ]
  },
  duration: 1
})