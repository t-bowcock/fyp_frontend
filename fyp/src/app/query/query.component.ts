import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';

interface Item {
    name: String;
    id: Number;
    quote: String;
    description: String;
    quality: Number;
    unlock: String;
    effects: String;
    notes: String;
}

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

    constructor(private service: QueryService) { }

    Items: Item[] = [];

    ngOnInit(): void {
        this.service.getItemList().subscribe(data => {
            this.Items = data["items"];
        })
    }

}
