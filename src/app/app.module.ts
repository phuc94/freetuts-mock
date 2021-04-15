import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { NavbarModule } from './shared/navbar/navbar.module';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from './sidebar/sidebar.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    FixedpluginModule,
    SidebarModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
