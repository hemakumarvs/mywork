import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EmployeesService} from './Services/DataSourceService';
import { AppComponent } from './app.component';
import {DataDisplayComponent} from './ChildComponents/DataDisplayComponent';

@NgModule({
  declarations: [
    AppComponent,DataDisplayComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
