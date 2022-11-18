import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './components/mi-primer-componente/mi-primer-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
