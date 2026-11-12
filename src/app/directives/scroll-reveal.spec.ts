import { ElementRef, Renderer2 } from '@angular/core';
import { ScrollReveal } from './scroll-reveal';

describe('ScrollReveal', () => {
  it('should create an instance', () => {
    const mockRenderer = {
      addClass: (_element: HTMLElement, _className: string) => undefined,
      removeClass: (_element: HTMLElement, _className: string) => undefined,
      setStyle: (_element: HTMLElement, _style: string, _value: string | null) => undefined,
    } as unknown as Renderer2;

    const directive = new ScrollReveal(
      new ElementRef(document.createElement('div')),
      mockRenderer,
    );

    expect(directive).toBeTruthy();
  });
});
