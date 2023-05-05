import { Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
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

cytoscape.use(fcose);

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
    names1;
    names;
    node1Options: Observable<string[]>;
    node2Options: Observable<string[]>;

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

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.names.filter(option => option.toLowerCase().includes(filterValue));
    }

    ngOnInit(): void {
        this.getAllNames().then((data) => {
            this.names = data
            this.node1Options = this.node1Control.valueChanges.pipe(
                startWith(''),
                map(value => this._filter(value || '')),
            );
            this.node2Options = this.node2Control.valueChanges.pipe(
                startWith(''),
                map(value => this._filter(value || '')),
            );
        });

        var cy = cytoscape({
            container: document.getElementById('cy'), // container to render in

            elements: this.getAll(),

            style: style,

            layout: {
                name: "fcose",

            }

        });

        cy.on('select', 'node[nodeType = "Item"]', (evt) => {
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

        cy.on('click', 'node[nodeType = "Trinket"]', (evt) => {
            this.getItem(evt.target.id()).then(
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

        cy.on('click', 'node[nodeType = "Character"]', (evt) => {
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

    }
}