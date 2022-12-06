import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {


  constructor(private _elemenfRef: ElementRef, private _renderer: Renderer2) { 
    // console.log(this._elemenfRef);
    // this._elemenfRef.nativeElement.style.backgroundColor = 'yellow'; // pratica ruim: XXS
    this._renderer.setStyle(this._elemenfRef.nativeElement, 'background-color', 'yellow'); // boa pratica
  }

}
