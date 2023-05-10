import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';
import { GraphService } from './graph.service';
import style from './style';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ItemComponent } from './item.component';
import { TrinketComponent } from './trinket.component';
import { CharacterComponent } from './character.component';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { RelComponent } from './rel.component';

cytoscape.use(fcose);

export class Node {
    constructor(public name: string, public id: number) { }
}

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


    constructor(private service: GraphService, private overlay: Overlay) { }
    @ViewChild('graph', { static: false }) graphDiv: ElementRef;
    currentOverlay: ComponentRef<any>;
    overlayConfig = {
        width: '20%',
        panelClass: 'test',
        positionStrategy: this.overlay.position().global()
            .right('5px').top('70px')
    };

    node1Control = new FormControl('');
    node2Control = new FormControl('');
    node1Options: Observable<any>;
    node2Options: Observable<any>;
    nodes: Node[];
    relationship = '';
    cy;

    async getAll() {
        const graphData = await this.service.getAll();
        return graphData;
    }

    async getAllNames() {
        const nameData = await this.service.getAllNames();
        return nameData
    }

    async getItem(id) {
        const itemData = await this.service.getItem(id);
        return itemData;
    }

    async getTrinket(id) {
        const trinketData = await this.service.getTrinket(id);
        return trinketData;
    }

    async getCharacter(id) {
        const characterData = await this.service.getCharacter(id);
        return characterData;
    }

    async getRel(source, target) {
        const relData = await this.service.getRel(source, target);
        return relData;
    }

    async search(node1_id: string | null, rel: string | null, node2_id: string | null) {
        const searchData = await this.service.search(node1_id, rel, node2_id);
        return searchData;
    }

    filterStates(selected_node: any) {
        if (typeof (selected_node) === "string") {
            return this.nodes.filter(node =>
                node.name.toLowerCase().indexOf(selected_node.toLowerCase()) === 0);
        }
        return this.nodes.filter(node =>
            node.id == selected_node);
    }

    getOptionText(id) {
        if (!id) {
            return ''
        }
        return this.nodes.filter(node =>
            node.id == id)[0].name;
    }

    Submit() {
        this.search(this.node1Control.value, this.relationship, this.node2Control.value).then((data) => {
            this.cy.elements().remove();
            this.cy.add(data);
            this.cy.layout({ name: "fcose" }).run();
        });
    }

    ngOnInit(): void {
        this.getAllNames().then((data) => {
            this.nodes = data
            this.node1Options = this.node1Control.valueChanges
                .pipe(
                    startWith(''),
                    map(node => node ? this.filterStates(node) : this.nodes.slice())
                );
            this.node2Options = this.node2Control.valueChanges
                .pipe(
                    startWith(''),
                    map(node => node ? this.filterStates(node) : this.nodes.slice())
                );
        });

        this.cy = cytoscape({
            container: document.getElementById('cy'), // container to render in

            elements: this.getAll(),

            style: style,

            layout: {
                name: "fcose",

            }

        });

        this.cy.on('select', 'node[nodeType = "Item"]', (evt) => {
            this.getItem(evt.target.id()).then(
                (data) => {
                    if (this.currentOverlay) {
                        this.currentOverlay.destroy()
                    }
                    const overlayRef = this.overlay.create(this.overlayConfig);
                    const portal = new ComponentPortal(ItemComponent);
                    this.currentOverlay = overlayRef.attach(portal);
                    this.currentOverlay.instance.itemData = data;
                }
            );
        });

        this.cy.on('click', 'node[nodeType = "Trinket"]', (evt) => {
            this.getTrinket(evt.target.id()).then(
                (data) => {
                    if (this.currentOverlay) {
                        this.currentOverlay.destroy()
                    }
                    const overlayRef = this.overlay.create(this.overlayConfig);
                    const portal = new ComponentPortal(TrinketComponent);
                    this.currentOverlay = overlayRef.attach(portal);
                    this.currentOverlay.instance.trinketData = data;
                }
            );
        });

        this.cy.on('click', 'node[nodeType = "Character"]', (evt) => {
            this.getCharacter(evt.target.id()).then(
                (data) => {
                    if (this.currentOverlay) {
                        this.currentOverlay.destroy()
                    }
                    const overlayRef = this.overlay.create(this.overlayConfig);
                    const portal = new ComponentPortal(CharacterComponent);
                    this.currentOverlay = overlayRef.attach(portal);
                    this.currentOverlay.instance.characterData = data;
                }
            );
        });

        this.cy.on('click', 'edge', (evt) => {
            this.getRel(evt.target.data().source, evt.target.data().target).then(
                (data) => {
                    if (this.currentOverlay) {
                        this.currentOverlay.destroy()
                    }
                    const overlayRef = this.overlay.create(this.overlayConfig);
                    const portal = new ComponentPortal(RelComponent);
                    this.currentOverlay = overlayRef.attach(portal);
                    this.currentOverlay.instance.relData = data;
                }
            );
        });

    }
}