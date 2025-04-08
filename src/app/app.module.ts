import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ContactFormModule } from './components/contact-form';
import { ContactListModule } from './components/contact-list';
import { ContactState } from './contact.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    CdkTableModule,
    CommonModule,
		ContactFormModule,
		ContactListModule,
		BrowserModule,
		NgxsModule.forRoot([
			ContactState
		])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
