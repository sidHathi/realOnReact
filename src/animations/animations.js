import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Animations
export function goalsAnimations(){

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".switchingImage",
            pin: true,
            pinSpacing: false, 
            start: "top top",
            scrub: false,
            toggleActions: "play reverse play reverse"
        }
    });

    tl.addLabel("start")
        .from(".switchingImage", {duration: 0.75, opacity: 0, ease: 'Circ.easeOut'})
        
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".switchingImage2",
            pin: true, 
            start: "top top",
            toggleActions: "play reverse play reverse"
        }
    });

    tl2.addLabel("start")
        .from(".switchingImage2", {duration: 0.75, opacity: 0, ease: 'Circ.easeOut'})

}

//Animations
export function goalsAnimationsM(){

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".switchingImgMobile",
            pin: "top", 
            start: "bottom bottom",
            end: "center top",
            toggleActions: "play reverse play reverse"
        }
    });

    tl.addLabel("start")
        .from(".switchingImgMobile", {duration: 0.75, opacity: 0, scale: 1.2})
        
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".switchingImgMobile2",
            pin: "top", 
            start: "bottom bottom",
            toggleActions: "play reverse play reverse"
        }
    });

    tl2.addLabel("start")
        .from(".switchingImgMobile2", {duration: 0.75, opacity: 0, scale: 1.2})

}
export function handleNavTransparent(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#sponsors',
            start: "top top",
            toggleActions: "play reverse play reverse"
        }
    })

    tl.addLabel('start').to('.navbar.navbar-dark', {duration: 0.5, backgroundColor: '#000000'})
}

export function openingAnimation(){
    gsap.from('.darken', {duration: 3, backgroundColor: 'rgba(0, 0, 0, 0.8)'})
}

export function displayStickyTimeline(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".timeline",
            pin: false,
            pinSpacing: false, 
            start: "top 40%",
            scrub: true,
            end: false,
            toggleActions: "play none none reverse"

        }
    });

    tl.addLabel("start")
        .to(".timeline", {duration: 0.75, opacity: 1, ease: 'Circ.easeOut'})
}

export function configureStickyTimeline(){

    gsap.registerPlugin(CSSRulePlugin);
    var tlAfter = CSSRulePlugin.getRule('div.mobileTimeline::after');

    var mediaQ = window.matchMedia('(max-width: 1000px)');

    if (mediaQ.matches){
        
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1",
                start: "top bottom",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        })
        tl2.addLabel("start")
            .to("#tl1", {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to(".timeline-item-m", {x: 20})
            .to(tlAfter, {background: "-webkit-linear-gradient(left, rgba(255, 255, 255) 0%, rgba(255, 255, 255) 100%)", delay: -0.25});
    
        
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section2",
                start: "top bottom",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        })
    
        tl3.addLabel("start")
            .to('#tl2', {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to("#tl1", {scale: 1.0, color: "whitesmoke", ["font-weight"]: 100})
            .to(".timeline-item-m", {x: -20})
            .to(tlAfter, {background: "-webkit-linear-gradient(left, rgba(255, 0, 0) 0%, rgba(255, 255, 255) 100%)", delay: -0.25});
    
        var tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section3",
                start: "top bottom",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        })
    
        tl4.addLabel("start")
            .to('#tl3', {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to("#tl2", {scale: 1.0, color: "whitesmoke", ["font-weight"]: 100})
            .to(".timeline-item-m", {x: -60})
            .to(tlAfter, {background: "-webkit-linear-gradient(left, rgba(255, 0, 0) 0%, rgba(255, 150, 150) 100%)", delay: -0.25});
    
        var tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section4",
                start: "top bottom",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        })
    
        tl5.addLabel("start")
            .to('#tl4', {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to("#tl3", {scale: 1.0, color: "whitesmoke", ["font-weight"]: 100})
            .to(".timeline-item-m", {x: -100})
            .to(tlAfter, {background: "-webkit-linear-gradient(left, rgba(255, 0, 0) 0%, rgba(255, 0, 0) 100%)", delay: -0.25});
    }
    else{
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1",
                start: "top bottom",
                scrub: -1,
                toggleActions: "play none none reverse"
            }
        })
    
        tl2.addLabel("start")
            .to("#tl1", {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to(".line-border", {["border-image"]: "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) 0 100%", delay: -0.25});
    
        
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section2",
                start: "top bottom",
                scrub: -1,
                toggleActions: "play none none reverse"
            }
        })
    
        tl3.addLabel("start")
            .to('#tl2', {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to("#tl1", {scale: 1.0, color: "whitesmoke", ["font-weight"]: 100})
            .to(".line-border", {["border-image"]: "linear-gradient(rgb(255, 0, 0), rgb(255, 255, 255)) 0 100%", delay: -0.25});
    
        var tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section3",
                start: "top bottom",
                scrub: -1,
                toggleActions: "play none none reverse"
            }
        })
    
        tl4.addLabel("start")
            .to('#tl3', {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to("#tl2", {scale: 1.0, color: "whitesmoke", ["font-weight"]: 100})
            .to(".line-border", {["border-image"]: "linear-gradient(rgb(255, 0, 0), rgb(255, 150, 150)) 0 100%", delay: -0.25});
    
        var tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section4",
                start: "top bottom",
                scrub: -1,
                toggleActions: "play none none reverse"
            }
        })
    
        tl5.addLabel("start")
            .to('#tl4', {scale: 1.1, color: "white", ["font-weight"]: 700})
            .to("#tl3", {scale: 1.0, color: "whitesmoke", ["font-weight"]: 100})
            .to(".line-border", {["border-image"]: "linear-gradient(rgb(255, 0, 0), rgb(255, 0, 0)) 0 100%", delay: -0.25});
    }
    
}
openingAnimation();
goalsAnimations();
goalsAnimationsM();
handleNavTransparent();
configureStickyTimeline();
displayStickyTimeline();