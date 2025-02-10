import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
  ],
})
export class DashboardMaterialModule {}
