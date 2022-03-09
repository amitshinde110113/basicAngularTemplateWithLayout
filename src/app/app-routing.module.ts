import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppPreloader } from './app-routing-loader';
import { LayoutAppComponent } from './layouts/app/app.component';
import { LayoutAuthComponent } from './layouts/auth/auth.component';
import { LayoutsModule } from './layouts/layouts.module';
import { NotFoundComponent } from './pages/404.component';
import { SharedModule } from './shared.module';

const COMPONENTS = [NotFoundComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    // canActivate: [PostLoginAuthGuard],
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'dashboard',
    component: LayoutAppComponent,
    // canActivate: [PostLoginAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path: 'clusters',
    component: LayoutAppComponent,
    // canActivate: [PostLoginAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/cluster/cluster.module').then((m) => m.ClusterModule),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 - Page not found' },
  },
];
@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      // useHash: true,
      onSameUrlNavigation: 'reload',
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],

  exports: [RouterModule],
})
export class AppRoutingModule {}
