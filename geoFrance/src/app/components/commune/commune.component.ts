import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import {Commune} from 'src/app/models/commune.model'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  departements: Departement[] = []; // j'initialise  un tableau pour stocker les infos de l'API
  departementsIsLoading: boolean = false;// Definir le chargement des information 
  departementsIsLoaded: boolean = false;// si les départements sont chargés
  communes: Commune[] = [];
  communesForGraph: { name: string, value: number }[] =[];
  communesIsLoading: boolean = true;
  communesIsLoaded: boolean =true;
  // pour realiser un get , je dois declarer en PRIVATE le service HttpClient dans le construct
  constructor(private HttpClient: HttpClient,private toastr:ToastrService) {}

  // fonction qui permet le chargement des départements
  loadDepartements():void{
    this.departementsIsLoading = true;// permet de gérer l'etat du spinner ( pour le comfort utilisateur)
    this.toastr.success('liste des departements chargés', 'chargement OK')
    // Récuperation des donnéees de l'API grâce à une requete GET
    this.HttpClient.get<Departement[]>(`https://geo.api.gouv.fr/departements`)
    .subscribe(// On doit souscrire aux informations de l'API
      data=>{
        this.departements = data;// Je transfert  les données de l'API dans mon tableau vide
        this.departementsIsLoaded = true;// Le bouton de chargement disparait
        this.departementsIsLoading = false;// U fois les données chargeés, le chargement passe à false
      }
    )
  }

  loadCommunes(codeDepartement:string):void{
    this.communesIsLoading = true;
    this.toastr.success('liste des communes chargée', 'chargement OK')
    this.HttpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`)
    .subscribe(
      data=>{
        this.communes = data;
        this.communesForGraph = data
        .filter(commune => commune.population > 5000)
        .map(commune => {
          return {
            name:commune.nom,
            value: commune.population,
          }
        })
        this.communesIsLoaded = true;
        this.communesIsLoading = false;
      })
  }

  ngOnInit(): void {
  }

}
