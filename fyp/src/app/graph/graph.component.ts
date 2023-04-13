import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import euler from 'cytoscape-euler';
import { GraphService } from './graph.service';
import { Item, Trinket, Character, Synergy, Interaction } from '../interfaces';
import { map } from 'rxjs/operators';

cytoscape.use(euler);

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


    constructor(private service: GraphService) { }
    private Items: any[] = [];
    private Trinkets: Trinket[] = [];
    private Characters: Character[] = [];
    private Synergies: Synergy[] = [];
    private Interactions: Interaction[] = [];

    getItems() {
        return this.service.getItemList().pipe(map(
            (data) => {
                this.Items = data["items"];
            }));
    }

    getAll() {
        return this.service.getAll().pipe(map(
            (data) => {
                console.log(data)
                this.Items = data["items"];
                this.Trinkets = data["trinkets"];
                this.Characters = data["characters"];
                this.Synergies = data["synergies"];
                this.Interactions = data["interactions"];
            }));
    }

    ngOnInit(): void {
        console.log("getting data")
        this.getAll().subscribe(_ => {
            var combined_lists = this.Items.concat(this.Trinkets, this.Characters, this.Synergies, this.Interactions)
            var cy = cytoscape({
                container: document.getElementById('cy'), // container to render in

                elements: combined_lists,

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

            });
        });

    }

}