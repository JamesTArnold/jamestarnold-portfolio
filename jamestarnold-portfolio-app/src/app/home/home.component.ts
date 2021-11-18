import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.initParallax();

    gsap.registerPlugin(TextPlugin);

    let tl = gsap.timeline();
    tl.from('.section-1-title-photo', {
      duration: 2,
      opacity: 0,
      y: 150,
    })
      .from('.section-1-greeting-text', {
        duration: 1,
        opacity: 0,
        y: 150,
      })
      .to('.section-1-greeting-text', {
        duration: 1,
        text: { value: 'Front End Developer', delimiter: ' ' },
        delay: 1,
        ease: 'sine',
      })
      .from('.section-1-skillset-logo', {
        duration: 1,
        opacity: 0,
        x: 150,
        stagger: 0.25,
      });
  }

  private initParallax() {
    gsap.registerPlugin(ScrollTrigger);
    // Register the ScrollTrigger plugin with gsap
    //Loop over all the sections and set animations
    gsap.utils.toArray('section').forEach((section: any, i) => {
      // Set the bg variable for the section
      section.bg = section.querySelector('.bg');

      // Give the backgrounds some random images
      // section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
      // Set the initial position for the background
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

      // Do the parallax effect on each section
      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: 'none',
        scrollTrigger: {
          // Trigger the animation as soon as the section comes into view
          trigger: section,
          // Animate on scroll/scrub
          scrub: true,
        },
      });
    });
  }
}
