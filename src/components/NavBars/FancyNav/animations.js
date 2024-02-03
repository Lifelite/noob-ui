import gsap from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
            amount: 0.1
        }
    });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 0.07
        }
    });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
};

// Hover on the link
export const handleHover = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: "power1.inOut"
    });
};

// Hover off the link
export const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power1.inOut"
    });
};

// adds image once you hover on
export const handleOption = (option, target) => {
    gsap.to(target, {
        duration: 0,
        background: `url(${option}) center center`,
        backgroundRepeat: "no-repeat"
    });
    gsap.to(target, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut"
    });
    gsap.from(target, {
        duration: 0.4,
        skewY: 2,
        transformOrigin: "right top"
    });
};

// Removes the image once you hover off
export const handleOptionReturn = target => {
    gsap.to(target, {
        duration: 0,
        skewY: 0
    });
    gsap.to(target, {
        duration: 0.4,
        opacity: 0,
        skewY: 0
    });
};

export const handleFadeIn = target => {
    gsap.from(target, {
        opacity: 0,
        duration: .8,
        x: .1,
        ease: "power1.in"
    })
    gsap.to(target, {
        opacity: 1,
        duration: .8,
        x: .1,
        ease: "power1.inOut"
    })
}

export const handleStaggerIn = target => {
    gsap.from(target, {
        opacity: 0,
        scale: 0,
        ease: "back.out",
        duration: .9,
        x: .1,
        y: .2,
        stagger: .2,
    })
    gsap.to(target, {
        opacity: 1,
        scale: 1,
        ease: "power5.in",
        duration: .9,
        x: .1,
        y: .2,
        stagger: .2,
    })
}

export const handleEaseIn = target => {
    gsap.from(target,{
        opacity: 0,
        right: 5,
        x: .4,
        duration: .9,
        ease: "power2.out"
    })
    gsap.to(target, {
        opacity: 1,
        right: 0,
        duration: .9,
        ease: "power1.in",
    })
}

export const handleStaggerTo = target => {
    gsap.to(target, {
        top: 0,
        duration: .9,
        stagger: .2,
        x: .1,
        y: .9,
        ease: "back.out",
    })
}