import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `<h1>Имеется информация о модели динамики объекта в форме:</h1>
                <button (click)="equationForm()">системы обыкновенных дифференциальных уравнений в канонической форме </button>
                <p><button (click)=" functionForm()">передаточной функции, частотных характеристик</button><p>
                <button (click)="dataForm()">экспериментальных данных о динамике объекта</button>`
})

export class ConsumptionBetweenComponent {
constructor(private router: Router){}
    equationForm(){
        this.router.navigate(['/timeOver/consumptionBetween/equationForm']);
    }
    functionForm(){
            this.router.navigate(['/timeOver/consumptionBetween/functionForm']);
        }
    dataForm(){
            this.router.navigate(['/timeOver/consumptionBetween/dataForm']);
        }
}