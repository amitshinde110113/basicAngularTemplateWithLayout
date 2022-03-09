import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClustersComponent } from './clusters/clusters.component';
const routes: Routes = [
  {
    path: '',
    component: ClustersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClusterRoutingModule {}
