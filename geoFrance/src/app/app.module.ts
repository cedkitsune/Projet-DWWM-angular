import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommuneComponent } from './components/commune/commune.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FootersComponent } from './components/footers/footers.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartementTableComponent } from './components/departement-table/departement-table.component';
import { PaginationModule} from 'ngx-bootstrap/pagination'
import { FormsModule } from '@angular/forms';
import { CommuneTableComponent } from './components/commune-table/commune-table.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommuneGraphComponent } from './components/commune-graph/commune-graph.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CommuneComponent,
    HeadersComponent,
    FootersComponent,
    DepartementTableComponent,
    CommuneTableComponent,
    CommuneGraphComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule, // ajouter manuellement  pour recuperer les methodes get , post etc...
    PaginationModule, // ajouter manuellement pour faire fonctionner le module
    FormsModule, // ajouter obligatoirement pour la pagination
    ToastrModule.forRoot(),
    NgxChartsModule,
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }