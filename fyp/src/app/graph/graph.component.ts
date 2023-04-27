import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';
import { GraphService } from './graph.service';
import { map } from 'rxjs/operators';
import style from './style';

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

    getItem(id) {
        return this.service.getItem(id).pipe(map(
            (data) => {
                console.log(data)
            }));
    }

    ngOnInit(): void {
        var cy;
        this.getAll().subscribe(_ => {
            cy = cytoscape({
                container: document.getElementById('cy'), // container to render in

                elements: this.graphData,

                style: style,

                layout: {
                    name: "fcose",
                }

            });
            cy.bind('click', 'node', function (evt) {
                console.log('node clicked: ', evt.target.id());
                this.getItem(evt.target.id()).subscribe(_ => {
                    console.log("test")
                });
            });
        });





    }
}