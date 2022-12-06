import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  @HostListener('mouseenter') onMouseOver() {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;

  constructor() {}

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }
}
