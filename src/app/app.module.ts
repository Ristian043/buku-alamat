import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL DESIGN COMPONENT
import {MatToolbarModule} from '@angular/material/toolbar'; // tambahan baru ke 1 toolbar
import {MatButtonModule} from '@angular/material/button'; // tambahan ke 2 button
import {MatCardModule} from '@angular/material/card';  // tambahan ke 3 card
import {MatListModule} from '@angular/material/list';  // tambahan ke 3 list
import {MatIconModule} from '@angular/material/icon';  // tambahan ke 3 icon
import {MatMenuModule} from '@angular/material/menu';  // tambahan ke 4 menu
import {MatDialogModule} from '@angular/material/dialog';  //tambahan ke 5 dialog
import {MatFormFieldModule} from '@angular/material/form-field';  //tambahan ke 5 form field
import {MatInputModule} from '@angular/material/input';  //tambahan ke 5 input
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component'; //otomatis ditambahkan
import { HttpClientModule } from '@angular/common/http';  //tambahan ke 6 http
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //tambahan ke 7 form

@NgModule({
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
  entryComponents:[
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, // tambahan baru ke 1
    MatButtonModule, //tambahan ke 2
    MatCardModule,  //tambahan ke 3
    MatListModule,  //tambahan ke 3
    MatIconModule,  //tambahan ke 3
    MatMenuModule,  //tambahan ke 4
    MatDialogModule,  //tambahan ke 5
    MatFormFieldModule,  //tambahan ke 5
    MatInputModule,  //tambahan ke 5
    HttpClientModule, //tambahan modul baru ke 6
    FormsModule //tambahan ke 7
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
