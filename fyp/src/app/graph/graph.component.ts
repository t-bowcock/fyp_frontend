import { Component, Input, OnInit } from '@angular/core';
import { GraphService } from './graph.service';
import { Edge, Node } from '@swimlane/ngx-graph';
import { Item, Trinket, Character, Synergy, Interaction } from '../interfaces';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
    @Input() Items: Item[] = [];
    @Input() Interactions: Interaction[] = [];

    public nodes: Node[] = [];
    public links: Edge[] = [];

    constructor(private service: GraphService) {
        this.service.getItemList().subscribe(data => {
            this.Items = data["items"];
        })

        this.service.getInteractionList().subscribe(data => {
            this.Interactions = data["interactions"];
        })
    }

    ngOnInit(): void {
        for (const item of this.Items) {
            const node: Node = {
                id: String(item.id),
                label: item.name,
                data: {
                    description: item.description
                }
            };
            this.nodes.push(node);
        }

        for (const interaction of this.Interactions) {
            const edge: Edge = {
                source: String(interaction.source),
                target: String(interaction.destination),
                label: '',
                data: {
                    description: interaction.description
                }
            };
            this.links.push(edge);
        }
    }

}
