import { DetailProductComponent } from './../../views/products/detail-product/detail-product.component';
import { EditProductComponent } from './../../views/products/edit-product/edit-product.component';
import { CategoriesComponent } from './../../views/categories/categories.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { UserProfileComponent } from '../../views/user-profile/user-profile.component';
import { TableListComponent } from '../../views/table-list/table-list.component';
import { TypographyComponent } from '../../views/typography/typography.component';
import { IconsComponent } from '../../views/icons/icons.component';
import { MapsComponent } from '../../views/maps/maps.component';
import { NotificationsComponent } from '../../views/notifications/notifications.component';
import { UpgradeComponent } from '../../views/upgrade/upgrade.component';
import { HomeComponent } from '../../views/home/home.component';
import { SalesComponent } from '../../views/sales/sales.component';
import { AddProductComponent } from '../../views/products/add-product/add-product.component';
import { ProductsComponent } from '../../views/products/products.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'home',           component: HomeComponent },
    { path: 'sales',          component: SalesComponent },
    { 
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: 'add', component: AddProductComponent },
            { path: 'edit', component: EditProductComponent },
            { path: 'detail', component: DetailProductComponent }
        ] 
    },
    { path: 'categories',     component: CategoriesComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
