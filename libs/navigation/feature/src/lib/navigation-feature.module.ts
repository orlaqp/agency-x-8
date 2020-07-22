import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NavigationComponent, SidebarComponent],
})
export class NavigationFeatureModule {}
