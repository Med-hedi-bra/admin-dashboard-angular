import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormComponent } from './form.component';
import { AdvanceFormComponent } from './advance-form/advance-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { MunicipalityFormComponent } from './municipality-form/municipality-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: 'basic-form', component: BasicFormComponent },
      {path:"adminForm", component:AdminFormComponent},
      {path:"municipalityForm",component:MunicipalityFormComponent},
      { path: 'form-layout', component: FormLayoutComponent },
      { path: 'advanced-form', component: AdvanceFormComponent },
      { path: 'dynamic-form', component: DynamicFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
