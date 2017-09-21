import { Directive, ElementRef, HostListener, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'gray';
  }

  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.backgroundColor = 'transparent';
  }

}

