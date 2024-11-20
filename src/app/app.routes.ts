import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent }, // Add this line
    { path: 'orders', component: OrdersComponent },
];
