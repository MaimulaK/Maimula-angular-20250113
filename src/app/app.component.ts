import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent, SidenavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    // isSideNavOpenStore: WritableSignal<boolean> = signal(false);
    // toggleSideNavMenu() {
    //     this.isSideNavOpenStore.update(value => !value);
    // }
}
