import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterCanActivate } from './guard';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'counter', component: CounterComponent, canActivate: [CounterCanActivate] },
  // { path: 'postlist', component: PostsListComponent },
  { path: 'basket', loadChildren: () => import('mfeBasket/Module').then(m => m.BasketModule) },
  { path: 'profile', loadChildren: () => import('mfeProfile/Module').then(m => m.ProfileModule)},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
