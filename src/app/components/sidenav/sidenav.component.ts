import {Component, viewChild} from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatSidenavModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
    // isSideNavOpen = input(false);
    // sideNavChange = output<boolean>();

    private readonly matDrawer = viewChild<MatDrawer>('drawer');

    toggleSideNavButton() {
        // this.sideNavChange.emit(!this.isSideNavOpen());
        this.matDrawer()?.toggle();
    }
}
