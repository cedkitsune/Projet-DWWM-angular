import { Component, Input, OnInit} from '@angular/core';
import {Commune} from 'src/app/models/commune.model';
import {faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})

export class CommuneTableComponent implements OnInit {


  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() communes:Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false; 

  currentPage: number = 1;
  search: string = "";

  constructor() { }
  


  ngOnInit(): void {}

getLength(): number{
    return this.communes
    .filter(commune => 
      commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      commune.code.includes(this.search))
    .length;
  }

  getcommunes(): Commune[]{
    return this.communes
    .filter(commune => 
      commune.nom.toLowerCase().includes(this.search.toLowerCase())||
      commune.code.includes(this.search))
      .slice((this.currentPage - 1) * 10, this.currentPage * 10);
  }

  getPopulationDecr(): Commune[] { // fonction pour trier en order de plus grand au plus petit
  return this.communes
  .sort((a,b) => {
    return a.population - b.population
    }
   ).reverse()}
   getPopulationCroi(): Commune[] { // fonction pour trier en order du plus petit au plus grand
    return this.communes
    .sort((a,b) => {
      return a.population - b.population
      }
     )}
  }