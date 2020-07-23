import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularMaterialModule } from '@agency-x/angular-material';

@NgModule({
    imports: [CommonModule, AngularMaterialModule],
    declarations: [NavigationComponent, SidebarComponent],
    exports: [SidebarComponent]
})
export class NavigationFeatureModule {}
