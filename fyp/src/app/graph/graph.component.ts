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

    async getAll() {
        const graphData = await this.service.getAll();
        return graphData;
    }

    async getItem(id) {
        const itemData = await this.service.getItem(id);
        return itemData;
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

        cy.on('click', 'node', (evt) => {
            console.log('node clicked: ', evt.target.id());
            this.getItem(evt.target.id()).then(data => console.log(data));
        });




    }
}