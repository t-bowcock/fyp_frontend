import { Component, Input } from "@angular/core";

@Component({
    selector: "character",
    templateUrl: "./character.component.html",
    styleUrls: ["./graph.component.css"]
})
export class CharacterComponent {

    @Input() characterData!: any;

}


