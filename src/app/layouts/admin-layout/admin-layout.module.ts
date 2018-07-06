import { ProductsComponent } from './../../views/products/products.component';
import { EditProductComponent } from './../../views/products/edit-product/edit-product.component';
import { AddProductComponent } from './../../views/products/add-product/add-product.component';
//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


//Components
import { HomeComponent } from '../../views/home/home.component';
import { SalesComponent } from '../../views/sales/sales.component';
import { CategoriesComponent } from './../../views/categories/categories.component';


import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { UserProfileComponent } from '../../views/user-profile/user-profile.component';
import { TableListComponent } from '../../views/table-list/table-list.component';
import { TypographyComponent } from '../../views/typography/typography.component';
import { IconsComponent } from '../../views/icons/icons.component';
import { MapsComponent } from '../../views/maps/maps.component';
import { NotificationsComponent } from '../../views/notifications/notifications.component';
import { UpgradeComponent } from '../../views/upgrade/upgrade.component';
import { DetailProductComponent } from '../../views/products/detail-product/detail-product.component';

//Routes
import { AdminLayoutRoutes } from './admin-layout.routing';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule,

  ],
  declarations: [
    HomeComponent,
    AddProductComponent,
    DetailProductComponent,
    SalesComponent,
    ProductsComponent,
    EditProductComponent,
    CategoriesComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
