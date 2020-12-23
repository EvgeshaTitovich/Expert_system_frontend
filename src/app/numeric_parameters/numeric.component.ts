import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<h1>Для модели динамики можно принять:</h1>
                      <button (click)="model()">время запаздывания t пренебрежимо мало, управление - скалярная величина.</button>
                      <p><button (click)="otherCases()">другие случаи</button><p>`
})

export class NumericComponent {
constructor(private router: Router){}
    model(){
        this.router.navigate(['/timeOver/consumptionBetween/equationForm/numericParameters/model']);
    }
    otherCases(){
         this.router.navigate(['/timeOver/consumptionBetween/equationForm/numericParameters/otherCases']);
        }

}