import { Component, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin, ScrollToPlugin } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.initParallax();
    this.homeTimeline();

    gsap.registerPlugin(ScrollTrigger);
  }

  private homeTimeline() {
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
    // .from('.nav-button', {
    //   duration: 1,
    //   opacity: 0,
    //   y: 20,
    // });
  }

  private initParallax() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach((section: any, i) => {
      section.bg = section.querySelector('.bg');
      // section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          scrub: true,
        },
      });
    });
  }

  public navButtonClicked(section: string) {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, { scrollTo: { y: section } });
  }
}
