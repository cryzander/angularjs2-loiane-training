import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
// O P antes do selector quer dizer que essa diretiva só será aplicada
// em tags p (parágrafo)
// Para botão basta colocar button

export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
    ) { 
    //console.log(this._elementRef);
    //Veja depois. Bom para procurar o caminho correto da propriedade.
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    // ElementRef é vunerável
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );
  }

}
