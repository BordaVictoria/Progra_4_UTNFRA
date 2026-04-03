import { Routes } from '@angular/router';
import { Bienvenido } from './components/bienvenido/bienvenido';
import { Login } from './components/login/login';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';

export const routes: Routes = [
    { path: '',
    component: Bienvenido,  // ojooooo aca 
    // aca se arma por seccion 
    pathMatch: 'full'
    },
    {path: 'login', component: Login},
    {path: 'contact', component: Contact},
    {path: 'about', 
    component: About,
    children: [
        {path: 'contact', component: Contact},// cunado pones una hija , tiene adentro a la madre, entonces el about va a tener un router-outlet dentro,
        //  y ahi se va a mostrar el contact, pero el about sigue estando presente, 
        // es decir, el about no desaparece, sino que se muestra junto con el contact
    ]},
    { path: '**', component: Error }


];
