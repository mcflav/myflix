import { Directive, 
    ElementRef, 
    HostBinding,
    Renderer2,
    OnInit,
    HostListener

} from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
    defaultColor: string = 'transparent';
    highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.backgroundColor = this.defaultColor;
    }
}