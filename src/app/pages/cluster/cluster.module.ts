import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusterRoutingModule } from './cluster-routing.module';
import { ClustersComponent } from './clusters/clusters.component';


@NgModule({
  declarations: [
    ClustersComponent
  ],
  imports: [
    CommonModule,
    ClusterRoutingModule
  ]
})
export class ClusterModule { }
