import {Component, effect, input, TemplateRef, ViewContainerRef, viewChild} from '@angular/core';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
    readonly productsArr = productsMock;
    readonly popupHostContainer = input<TemplateRef<unknown>>();

    readonly popupContainer = viewChild('popupContainer', {read: ViewContainerRef});
    constructor() {
        effect(() => {
            const popupHostContainerTemplate = this.popupHostContainer();

            if (popupHostContainerTemplate) {
                this.popupContainer()?.createEmbeddedView(popupHostContainerTemplate);
            }
        });
    }

    buyProduct(cardId: string) {
        // eslint-disable-next-line no-console
        console.log(cardId);
    }
}
