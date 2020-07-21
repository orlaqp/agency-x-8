import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const authFeatureRoutes: Route[] = [];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [UnauthorizedComponent],
})
export class AuthFeatureModule {}
