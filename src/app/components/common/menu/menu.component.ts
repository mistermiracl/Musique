import { Component, Input } from '@angular/core';

@Component({
    templateUrl: 'menu.component.html',
    selector: 'menu'
})
export class MenuComponent{
    
    @Input() routeName: string;
    
    constructor(){

    }
}