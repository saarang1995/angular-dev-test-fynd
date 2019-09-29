import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent,
    ImageCardComponent,
    ImageEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
