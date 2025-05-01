import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from './components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {PopupHostComponent} from './components/popup-host/popup-host.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        ProductsListComponent,
        SidenavComponent,
        MatListModule,
        PopupHostComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    // @ViewChild('popUp') popUp!: PopupHostComponent;
    // readonly popUp = viewChild<PopupHostComponent | undefined>('popUp');
    // isSideNavOpenStore: WritableSignal<boolean> = signal(false);
    // toggleSideNavMenu() {
    //     this.isSideNavOpenStore.update(value => !value);
    // }
}
