import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { TimeLessComponent } from './time_less_10/time.less.component'
import { TimeOverComponent } from './time_over_10/time.over.component'
import { ConsumptionBetweenComponent } from './consumption_5_15/consumption.between.component'
import { ConsumptionLessComponent } from './consumption_less_5/consumption.less.component'
import { ConsumptionOverComponent } from './consumption_over_15/consumption.over.component'
import { EquationComponent } from './equation_form/equation.component'
import { FunctionComponent } from './function_form/function.component'
import { DataComponent } from './data_form/data.component'
import { NumericComponent } from './numeric_parameters/numeric.component'
import { IntervalComponent } from './interval_parameters/interval.component'
import { UnknownComponent } from './unknown_parameters/unknown.component'
import { OtherCasesComponent } from './other_cases/other.cases.component'
import { ModelComponent } from './model/model.component'

const appRoutes: Routes =[
    { path: 'timeLess', component: TimeLessComponent},
    { path: 'timeOver', component: TimeOverComponent},
    { path: 'timeOver/consumptionBetween', component: ConsumptionBetweenComponent},
    { path: 'timeOver/consumptionLess', component: ConsumptionLessComponent},
    { path: 'timeOver/consumptionOver', component: ConsumptionOverComponent},
    { path: 'timeOver/consumptionBetween/equationForm', component: EquationComponent},
    { path: 'timeOver/consumptionBetween/functionForm', component: FunctionComponent},
    { path: 'timeOver/consumptionBetween/dataForm', component: DataComponent},
    { path: 'timeOver/consumptionBetween/equationForm/numericParameters', component: NumericComponent},
    { path: 'timeOver/consumptionBetween/equationForm/intervalParameters', component: IntervalComponent},
    { path: 'timeOver/consumptionBetween/equationForm/unknownParameters', component: UnknownComponent},
    { path: 'timeOver/consumptionBetween/equationForm/numericParameters/otherCases', component: OtherCasesComponent},
    { path: 'timeOver/consumptionBetween/equationForm/numericParameters/model', component: ModelComponent},];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, TimeLessComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }