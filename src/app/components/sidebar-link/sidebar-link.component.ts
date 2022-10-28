import {
    Component,
    Input,
    OnInit,
    QueryList,
    TemplateRef,
    ContentChildren,
} from "@angular/core";

@Component({
    selector: "app-sidebar-link",
    templateUrl: "./sidebar-link.component.html",
    styleUrls: ["./sidebar-link.component.scss"],
})
export class SidebarLinkComponent implements OnInit {
    @ContentChildren("icon") icons?: QueryList<TemplateRef<HTMLElement>>;

    @Input() title?: string;

    @Input() linkUri?: string;
    @Input() linkActiveClass: string = "active";

    constructor() {}

    ngOnInit(): void {}
}
