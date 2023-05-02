import { Component, Input } from "@angular/core";
import { GraphService } from './graph.service';

@Component({
    selector: "item",
    templateUrl: "./item.component.html",
    styleUrls: ["./graph.component.css"]
})
export class ItemComponent {

    itemData: any;

    async getItem(id) {
        const itemData = await this.service.getItem(id);
        this.itemData = itemData
        return itemData;
    }
}


