import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `<div>
     <h1>Экспертная  система энергосберегающего управления</h1>
     <p>Вы рассматриваете проблему снижения затрат энергии или топлива объектом на основе:</p>
     <p>•    решения задачи оптимального управления работой объекта.</p>
     <p>Доля времени функционирования объекта в динамических режимах, т.е. с переменной скоростью изменения управляемой величины (например, температуры, расстояния и т.п.), составляет</p>
     <p><button (click)="timeLess()">менее 10%</button></p>
     <button (click)="timeOver()">более 10%</button>
     <router-outlet></router-outlet>
    </div>`
})

export class AppComponent {
constructor(private router: Router){}
    timeLess(){
        this.router.navigate(['/timeLess']);
    }
    timeOver(){
            this.router.navigate(['/timeOver']);
        }
}
