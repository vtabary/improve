import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  CdkMenuTrigger,
  CdkMenu,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';
import { SharedModule } from './modules/shared/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ClassSelectorComponent } from './components/class-selector/class-selector.component';

@NgModule({
  declarations: [AppComponent, ClassSelectorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    CdkMenuBar,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
