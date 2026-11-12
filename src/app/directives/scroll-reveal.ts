import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: false,
})
export class ScrollReveal implements AfterViewInit, OnDestroy {
  observer: IntersectionObserver | undefined;
  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
  const node = this.el.nativeElement;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window) ||

        window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }

    this.renderer.addClass(node, 'reveal-ready');

    this.observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          this.renderer.addClass(node, 'reveal-visible');

          this.observer?.unobserve(entry.target);

        }

      });

    }, { threshold: 0.1, rootMargin: '0px 0px 40px 0px' });

    this.observer.observe(node);
  }
  ngOnDestroy(): void {
    this.observer?.disconnect(); 
  }
}
