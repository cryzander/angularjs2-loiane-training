import { Directive, HostListener, HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

// O hostlistner serve para ouvir o elemento que esta usando este selector
// serve para ficar escutando eventos no hospedeiro (na tag onde esta inserido)
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = this.defaultColor;
  }

  // Associa uma variável a um estilo, classe CSS ou um atributo html
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  // Colocando um nome Input com o mesmo nome da diretiva
  // pode fazer um bind direto chamando o nome da diretiva
  // no html. Assim [highlight]="'red'"
  // Olha lá.
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  // Essa etapa do lifecycle é chamada na logo na renderização do componente
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
