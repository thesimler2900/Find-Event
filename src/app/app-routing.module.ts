import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'movie-list', loadChildren: './pages/movies/movie-list/movie-list.module#MovieListPageModule' },
  // { path: 'bookmark-list', loadChildren: './pages/bookmarks/bookmark-list/bookmark-list.module#BookmarkListPageModule' },
  // { path: 'movie-dteail', loadChildren: './pages/movies/movie-dteail/movie-dteail.module#MovieDteailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
