import {Component, effect, input, TemplateRef, viewChild, ViewContainerRef} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [MatButtonModule],
    templateUrl: './popup-host.component.html',
    styleUrl: './popup-host.component.css',
})
export class PopupHostComponent {
    private intervalId!: ReturnType<typeof setInterval>;
    private current = 0;
    readonly firstPop = input<TemplateRef<unknown>>();
    readonly secondPop = input<TemplateRef<unknown>>();

    readonly viewContainer = viewChild('viewPopup', {read: ViewContainerRef});

    constructor() {
        effect(() => {
            this.startCycle();
        });
    }

    startCycle() {
        this.showPop();
        this.intervalId = setInterval(() => {
            this.current = 1 - this.current;
            this.showPop();
        }, 3000);
    }

    showPop() {
        const first = this.firstPop();
        const second = this.secondPop();

        this.viewContainer()?.clear();

        if (this.current === 0 && first) {
            this.viewContainer()?.createEmbeddedView(first);
        } else if (this.current === 1 && second) {
            this.viewContainer()?.createEmbeddedView(second);
        }
    }

    closePop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.viewContainer()?.clear();
        const content: HTMLElement | null = document.querySelector('.popup-host');

        if (content) {
            content.style.display = 'none';
        }
    }

    private setContent() {
        // effect(() => {
        //     const first = this.firstPop();
        //     if (first) {
        //         this.viewContainer()?.createEmbeddedView(first);
        //     }
        //     setTimeout(() => {
        //         const second = this.secondPop();
        //         this.viewContainer()?.clear();
        //         if (second) {
        //             this.viewContainer()?.createEmbeddedView(second);
        //         }
        //     }, 1000);
        // });
        // setTimeout(() => {
        //     effect(() => {
        //         const second = this.secondPop();
        //         this.viewContainer()?.clear();
        //         if (second) {
        //             this.viewContainer()?.createEmbeddedView(second);
        //         }
        //     });
        // }, 1000);
    }
}
