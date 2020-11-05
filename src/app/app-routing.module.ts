import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component'
import { MemberstestComponent } from './memberstest/memberstest.component';
import { RammsteinfansComponent } from './rammsteinfans/rammsteinfans.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: '', component: RammsteinfansComponent},
  {path: 'test', component: MemberstestComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
