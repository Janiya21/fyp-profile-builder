import { useGSAP } from '@gsap/react';
import { stagger } from 'framer-motion';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React, { useRedfer, useEffect, useRef } from 'react'

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animatieOnScroll = true, delay = 0, duration }) {
    const containerRef = useRef(null);
    const elementRef = useRef([]);
    const splitRef = useRef([]);
    const lines = useRef([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        let elements = [];
        if (containerRef.current.hasAttribute('data-copy-wrapper')) {
            elements = Array.from(containerRef.current.children);
        } else {
            elements = [containerRef.current];
        }

        elements.forEach((element) => {
            elementRef.current.push(element);

            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            });


            splitRef.current.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;

            if (textIndent && textIndent !== '0px') {
                if (split.lines.length > 0) {
                    split.lines[0].computedStyleMap.paddingLeft = textIndent;
                }
                element.style.textIndent = '0px';
            }

            lines.current.push(...split.lines);
        });

        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
            y: "-5%",
            duration: duration,
            stagger: 0.1,
            ease: "power4.out",
            delay: delay
        };

        if (animatieOnScroll) {
            gsap.to(lines.current, {
                ...animationProps,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    once: true
                },
            });
        } else {
            gsap.to(lines.current, animationProps);
        }

        return () => {
            splitRef.current.forEach((split) => {
                if (split) {
                    split.revert();
                }
            });
        }
    }, {
        scope: containerRef,
        dependencies: { animatieOnScroll, delay }
    })

    if(React.Children.count(children) === 1){
        return React.cloneElement(children, {ref: containerRef});
    } 

    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    )
}

