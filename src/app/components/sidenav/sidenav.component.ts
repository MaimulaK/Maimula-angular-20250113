import {Component, effect, input, TemplateRef, viewChild, ViewContainerRef} from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatSidenavModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
    private readonly matDrawer = viewChild<MatDrawer>('drawer');
    readonly sideNavContentContainer = viewChild('sideNavContentContainer', {
        read: ViewContainerRef,
    });

    readonly productContainer = viewChild('productContainer', {
        read: ViewContainerRef,
    });

    readonly sideNavContentTemplate = input<TemplateRef<unknown>>();
    readonly productContentTemplate = input<TemplateRef<unknown>>();

    constructor() {
        effect(() => {
            const sideNavContentTemplate = this.sideNavContentTemplate();

            if (sideNavContentTemplate) {
                this.sideNavContentContainer()?.createEmbeddedView(sideNavContentTemplate);
            }
        });
        effect(() => {
            const productContentTemplate = this.productContentTemplate();

            if (productContentTemplate) {
                this.productContainer()?.createEmbeddedView(productContentTemplate);
            }
        });
    }

    toggleSideNavButton() {
        this.matDrawer()?.toggle();
    }
}
