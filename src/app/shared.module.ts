import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { HighlightDirective } from "./directives/highlight.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        DropdownDirective,
        HighlightDirective,
        PageNotFoundComponent,
        LoadingSpinnerComponent,
        AlertComponent
    ],

    imports: [
        CommonModule
    ],

    exports: [
        DropdownDirective,
        HighlightDirective,
        PageNotFoundComponent,
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule
    ],

    entryComponents: [AlertComponent]
    
})
export class SharedModule{}