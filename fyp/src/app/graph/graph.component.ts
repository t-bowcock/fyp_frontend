import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';
import { GraphService } from './graph.service';
import style from './style';

cytoscape.use(fcose);

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


    constructor(private service: GraphService) { }
    itemData: any;
    trinketData: any;
    characterData: any;
    itemIsOpen = false;
    trinketIsOpen = false;
    characterIsOpen = false;

    async getAll() {
        const graphData = await this.service.getAll();
        return graphData;
    }

    async getItem(id) {
        const itemData = await this.service.getItem(id);
        this.itemData = itemData
        return itemData;
    }

    async getTrinket(id) {
        const trinketData = await this.service.getTrinket(id);
        this.trinketData = trinketData
        return trinketData;
    }

    async getCharacter(id) {
        const characterData = await this.service.getCharacter(id);
        this.characterData = characterData
        return characterData;
    }

    ngOnInit(): void {

        var cy = cytoscape({
            container: document.getElementById('cy'), // container to render in

            elements: this.getAll(),

            style: style,

            layout: {
                name: "fcose",

            }

        });

        cy.on('click', 'node[nodeType = "Item"]', (evt) => {
            console.log('node clicked: ', evt.target.id());
            this.getItem(evt.target.id()).then(data => console.log(data));
            this.itemIsOpen = true;
            this.trinketIsOpen = false;
            this.characterIsOpen = false;
        });

        cy.on('click', 'node[nodeType = "Trinket"]', (evt) => {
            console.log('node clicked: ', evt.target.id());
            this.getTrinket(evt.target.id()).then(data => console.log(data));
            this.itemIsOpen = false;
            this.trinketIsOpen = true;
            this.characterIsOpen = false;
        });

        cy.on('click', 'node[nodeType = "Character"]', (evt) => {
            console.log('node clicked: ', evt.target.id());
            this.getCharacter(evt.target.id()).then(data => console.log(data));
            this.itemIsOpen = false;
            this.trinketIsOpen = false;
            this.characterIsOpen = true;
        });

    }
}