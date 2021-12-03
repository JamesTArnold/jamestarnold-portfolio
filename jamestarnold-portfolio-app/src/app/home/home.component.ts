import { Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, TextPlugin, ScrollToPlugin } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sectionTwoNav: string = '';
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrHeight);
  }

  constructor() {}
  ngOnInit(): void {
    this.initParallax();
    this.homeTimeline();
    this.initNavigation();

    gsap.registerPlugin(ScrollTrigger);

    if (this.scrWidth < 767) {
      gsap.from('.section-2-nav-button', {
        duration: 1,
        opacity: 0,
        x: -100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          toggleActions: 'restart none none none restart',
        },
      });
    } else {
      gsap.from('.section-2-nav-button', {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: 0.5,
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          toggleActions: 'restart none none none restart',
        },
      });
    }
  }

  private initNavigation() {
    gsap.from('.nav-button', {
      duration: 2,
      opacity: 0,
      y: 20,
    });
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
  }

  private initParallax() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach((section: any, i) => {
      section.bg = section.querySelector('.bg');
      section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

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

  public sectionTwoButtonClick(navTo: string) {
    this.sectionTwoNav = navTo;

    gsap.from('.section-2-article', {
      duration: 1,
      ease: 'power3',
      opacity: 0,
      scale: 0.1,
    });
  }
}
