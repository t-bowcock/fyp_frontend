import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import euler from 'cytoscape-euler';

cytoscape.use(euler);

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


    constructor() { }

    ngOnInit(): void {
        var cy = cytoscape({
            container: document.getElementById('cy'), // container to render in

            elements: [ // list of graph elements to start with
                { // node a
                    data: { id: 'a' }
                },
                { // node b
                    data: { id: 'b' }
                },
                { // edge ab
                    data: { id: 'ab', source: 'a', target: 'b' }
                }
            ],

            style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(id)'
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
                name: 'grid',
                rows: 1
            }

        });
    }

}