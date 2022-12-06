import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    // this._rend.setStyle(this._eRef.nativeElement, 'background-color', 'yellow');
    this.bgColor = 'yellow';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    // this._rend.setStyle(this._eRef.nativeElement, 'background-color', 'white');
    this.bgColor = 'white';
  }

  @HostBinding('style.backgroundColor') bgColor: string = 'white';

  constructor(/*private _eRef: ElementRef, private _rend: Renderer2*/) { }

}
