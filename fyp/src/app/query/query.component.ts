import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';
import { MatTableDataSource } from '@angular/material/table';
import { Item, Trinket, Character, Synergy, Interaction } from '../interfaces';
@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

    constructor(private service: QueryService) { }
    itemColumns: string[] = ['name', 'id', 'quote', 'description', 'quality', 'unlock', 'effects', 'notes'];
    trinketColumns: string[] = ['name', 'id', 'pool', 'quote', 'description', 'tags', 'unlock', 'effects', 'notes'];
    characterColumns: string[] = ['name', 'id'];
    synergyColumns: string[] = ['source', 'destination', 'description'];
    private Items: Item[] = [];
    private Trinkets: Trinket[] = [];
    private Characters: Character[] = [];
    private Synergies: Synergy[] = [];
    private Interactions: Interaction[] = [];
    dataSource = new MatTableDataSource<any>();

    ngOnInit(): void {
        this.service.getItemList().subscribe(data => {
            this.Items = data["items"];
            this.dataSource.data = this.Items
        })
    }

    changeTab(index: Number) {
        if (index == 0) {
            if (this.Items.length != 0) {
                this.dataSource.data = this.Items
            }
            else {
                this.service.getItemList().subscribe(data => {
                    this.Items = data["items"];
                    this.dataSource.data = this.Items
                })
            }
        }
        else if (index == 1) {
            if (this.Trinkets.length != 0) {
                this.dataSource.data = this.Trinkets
            }
            else {
                this.service.getTrinketList().subscribe(data => {
                    this.Trinkets = data["trinkets"];
                    this.dataSource.data = this.Trinkets
                })
            }
        }
        else if (index == 2) {
            if (this.Characters.length != 0) {
                this.dataSource.data = this.Characters
            }
            else {
                this.service.getCharacterList().subscribe(data => {
                    this.Characters = data["characters"];
                    this.dataSource.data = this.Characters
                })
            }
        }
        else if (index == 3) {
            if (this.Synergies.length != 0) {
                this.dataSource.data = this.Synergies
            }
            else {
                this.service.getSynergyList().subscribe(data => {
                    this.Synergies = data["synergies"];
                    this.dataSource.data = this.Synergies
                })
            }
        }
        else if (index == 4) {
            if (this.Interactions.length != 0) {
                this.dataSource.data = this.Interactions
            }
            else {
                this.service.getInteractionList().subscribe(data => {
                    this.Interactions = data["interactions"];
                    this.dataSource.data = this.Interactions
                })
            }
        }
    }

}
