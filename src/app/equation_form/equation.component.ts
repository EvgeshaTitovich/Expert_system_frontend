import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'home-app',
    template: ` <h1>Параметры модели объекта (в форме системы дифференциальных уравнений):</h1>
                   <button (click)="numericParameters()">известны в виде числовых (точечных) значений </button>
                   <p><button (click)="intervalParameters()">заданы интервалы возможных значений параметров</button><p>
                   <button (click)="unknownParameters()">неизвестны</button>`
})

export class EquationComponent {
constructor(private router: Router){}
    numericParameters(){
        this.router.navigate(['/timeOver/consumptionBetween/equationForm/numericParameters']);
    }
    intervalParameters(){
         this.router.navigate(['/timeOver/consumptionBetween/equationForm/intervalParameters']);
        }
    unknownParameters(){
         this.router.navigate(['/timeOver/consumptionBetween/equationForm/unknownParameters']);
        }

}