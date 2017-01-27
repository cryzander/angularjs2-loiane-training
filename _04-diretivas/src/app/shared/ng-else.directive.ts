import { Directive, Input,
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  // o set ali serve para dizer que toda vez
  // que ele for setado, faça alguma coisa
  @Input() set ngElse(condition: boolean){
    if (!condition){
      // renderiza a view embutida dentro da tag onde foi chamado <template>
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      // não renderiza (destroi) o elemento que esta dentro da tag <template>
      this._viewContainerRef.clear();
    }
  }

  constructor(
    // TemplateRef faz referencia ao template no qual 
    // a diretiva está setada (ngElse neste caso)
    // O any é para que ele possa ser usado em qualquer tag
    private _templateRef: TemplateRef<any>,

    // ViewContainerRef faz referencia ao conteudo (content) 
    // de uma tag (componente)
    private _viewContainerRef: ViewContainerRef
  ) { }

}
