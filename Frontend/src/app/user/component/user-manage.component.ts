import { AfterViewInit, Component, ViewChild } from "@angular/core"; 
import { MatPaginator } from "@angular/material/paginator";

@Component({
    selector: 'app-user-manage',
    templateUrl: './user-manage.component.html',
})

export class UserManageComponent implements AfterViewInit {
    @ViewChild(MatPaginator) p: MatPaginator;

    ngAfterViewInit() {
        this.p.page.subscribe(() => {
            this.load();
        });
    }

    load(): void {
        console.log(this.p.pageIndex + " " + this.p.pageSize);
    }
}