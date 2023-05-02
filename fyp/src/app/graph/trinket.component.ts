import { Component, Input } from "@angular/core";

@Component({
    selector: "trinket",
    templateUrl: "./trinket.component.html",
    styleUrls: ["./graph.component.css"]
})
export class TrinketComponent {

    @Input() trinketData!: any;

}


