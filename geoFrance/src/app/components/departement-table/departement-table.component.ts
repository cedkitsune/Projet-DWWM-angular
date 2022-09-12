import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-departement-table',
  templateUrl: './departement-table.component.html',
  styleUrls: ['./departement-table.component.css']
})
export class DepartementTableComponent implements OnInit {

  faMagnifyingGlassPlus = faMagnifyingGlassPlus;

  // Permet de gérer les entrées et sorties dans la balises HTML de commune.component.html
  @Input() departements: Departement[] = [];
  @Input() departementsIsLoading: boolean = false;
  @Input() departementsIsLoaded: boolean = false;
  @Output() loadDepartements: EventEmitter<{}> = new EventEmitter();
  @Output() loadCommunes: EventEmitter<string> = new EventEmitter();


  currentPage: number = 1;//pour la pagination, l'état de la page actuelle qui commmence à 1
  search: string = "";//l'input de la barre de recherche qu'on met à vide
  constructor() { }

  ngOnInit(): void { }

  // permet d'obtenir la longueur du tableau departement et de convertir en LOWERCASE les et de convertir en lowercase les donnees
  // Pour faire  fonctionner  la barre  de recherche
  getLength(): number {
    return this.departements
      .filter(departement =>
        departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
        departement.code.includes(this.search))
      .length;
  }

  getDepartements(): Departement[] {
    return this.departements
      .filter(departement =>
        departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
        departement.code.includes(this.search))
      .slice((this.currentPage - 1) * 10, this.currentPage * 10)
  }
}
