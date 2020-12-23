import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-app',
    template: `<h1>Вы считаете, что разработка системы оптимального управления будет оправдана, если потребление энергоресурсов снизится на:</h1>
    <button (click)="consumptionBetween()">5-15%</button>
    <p><button (click)="consumptionOver()">более 15%</button><p>
    <button (click)="consumptionLess()">менее 5%</button>`
})

export class TimeOverComponent {
constructor(private router: Router){}
    consumptionBetween(){
        this.router.navigate(['/timeOver/consumptionBetween']);
    }
    consumptionLess(){
         this.router.navigate(['/timeOver/consumptionLess']);
        }
    consumptionOver(){
         this.router.navigate(['/timeOver/consumptionOver']);
        }


}