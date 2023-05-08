import { Component, Input } from "@angular/core";

@Component({
    selector: "rel",
    templateUrl: "./rel.component.html",
    styleUrls: ["./graph.component.css"]
})
export class RelComponent {

    @Input() relData!: any;

}


