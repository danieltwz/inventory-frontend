import { Component, ViewEncapsulation, Input, Output, EventEmitter }
from '@angular/core';

@Component({
    selector: 'hello-world-1',
    templateUrl: './hello-world.component.html',
    //styles: [`h1 { color: green; }`],
    styleUrls: ['./hello-world.component.css'],
    // encapsulation: ViewEncapsulation.None
    // template: `
    //     <label>Name: </label>
    //     <input type="text">
    //     <hr>
    //     Hello, myName
    // `
})
export class HelloWorld1Component {
    @Input('name')
    public myName: string = 'n00b';

    @Output()
    onClickMe = new EventEmitter<boolean>();

    clickMe(str){
        //window.alert('Hello ' + str);
        this.onClickMe.emit(true);
    }
}
