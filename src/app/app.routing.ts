import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '/contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);