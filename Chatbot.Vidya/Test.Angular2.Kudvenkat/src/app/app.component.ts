import {Component} from "@angular/core"

@Component(
    {
        selector: 'my-app'
        //, template: `<h1>Welcome to  {{name}}</h1>`
        , templateUrl: 'app/app.component.html'
    }
)
export class AppComponent{
    name: string = "Angular2 by KudVenkat";
}