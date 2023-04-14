import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';
import { GraphService } from './graph.service';
import { Item, Trinket, Character, Synergy, Interaction } from '../interfaces';
import { map } from 'rxjs/operators';
import elements from './elements';

cytoscape.use(fcose);

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


    constructor(private service: GraphService) { }
    private graphData = [];

    getAll() {
        return this.service.getAll().pipe(map(
            (data) => {
                console.log(data);
                this.graphData = data
            }));
    }

    ngOnInit(): void {
        var cy = cytoscape({
            container: document.getElementById('cy'), // container to render in

            elements: elements,

            style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(name)'
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ],

            layout: {
                name: "fcose"
            }

        });



    }
}