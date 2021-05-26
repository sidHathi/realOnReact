/**
 * animations.js
 * 
 * Library containing functions for animating static webpage elements.
 * The functions use the widely used GSAP animations library.
 * 
 * Siddharth Hathi, REAL, May 2021
 */

import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * goalsAnmiations
 * 
 * Triggers animations for the informational sections of the homepage.
 * Used in non-mobile contexts
 */
export function goalsAnimations() {

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

/**
 * goalsAnmiationsM
 * 
 * Triggers animations for the informational sections of the homepage.
 * Used in mobile contexts
 */
export function goalsAnimationsM() {

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

/**
 * handleNavTransparent
 * 
 * Animates the transparency of the wepage's navbar on scroll
 */
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

/**
 * openingAnimation
 * 
 * Animates overlays containing the '.darken' property to fade in their content
 */
export function openingAnimation(){
    gsap.from('.darken', {duration: 3, backgroundColor: 'rgba(0, 0, 0, 0.8)'})
}

/**
 * displayStickyTimeline
 * 
 * Animates the appearance of the mission page's timeline
 */
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

/**
 * displayStickyTimeline
 * 
 * Configures the animation locations of the mission page's timeline
 * based on the content of the mission page.
 */
export function configureStickyTimeline(){

    gsap.registerPlugin(CSSRulePlugin);

    var tlAfter = CSSRulePlugin.getRule('div.mobileTimeline::after'); // The bar next to the timeline
    var mediaQ = window.matchMedia('(max-width: 1000px)');            // CSS media query

    if (mediaQ.matches){
        // if the timeline is displayed in a mobile device:
        
        // Animate the mobile timeline:

        // Scroll trigger for the first section of the mission page's content
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
    
        // Scroll trigger for the second section of the mission page's content
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
    
        // Scroll trigger for the third section of the mission page's content
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
    
        // Scroll trigger for the fourth section of the mission page's content
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
        // Configures animations for larger webpages
        
        // Animate the mobile timeline:

        // Scroll trigger for the first section of the mission page's content
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
    
        // Scroll trigger for the second section of the mission page's content
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
    
        // Scroll trigger for the third section of the mission page's content
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
    
        // Scroll trigger for the fourth section of the mission page's content
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

// Trigger all animations
openingAnimation();
goalsAnimations();
goalsAnimationsM();
handleNavTransparent();
configureStickyTimeline();
displayStickyTimeline();