import { Component, Input } from "@angular/core";

@Component({
    selector: "item",
    templateUrl: "./item.component.html",
    styleUrls: ["./graph.component.css"]
})
export class ItemComponent {

    @Input() itemData!: any;

}


