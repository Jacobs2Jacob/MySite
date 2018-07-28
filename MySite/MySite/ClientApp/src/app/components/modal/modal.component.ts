import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'; 
import { ModalContent } from '../../entities/modal-content';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">{{content?.Title}}</h5>
    </div>
    <div class="modal-body"> 
        {{content?.Body}}
    </div>
    <div class="modal-footer">
        <div *ngIf="content?.CloseButton">
            <button type="button" class="btn btn-default btn-link" (click)="close()">{{content?.ButtonText}}</button>
        </div>
    </div>
    `
})
export class NgbdModalContent {
    @Input() content: ModalContent;
    @Input() btnNavigationUrl: string;
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    close() {
        this.activeModal.close();
        this.onClose.subscribe(() => { this.router.navigateByUrl(this.btnNavigationUrl); })
        this.onClose.emit();
    }

    constructor(public activeModal: NgbActiveModal, private router: Router) { }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    @Input() component: Component;
    @Input() modalContent: ModalContent; 
    @Input() btnNavigationUrl: string;

    constructor(private modalService: NgbModal) {}

    open() {
        let modalRef;
        if (this.component) {
            modalRef = this.modalService.open(this.component); 
        }
        else {
            modalRef = this.modalService.open(NgbdModalContent);
            modalRef.componentInstance.content = this.modalContent;
            modalRef.componentInstance.btnNavigationUrl = this.btnNavigationUrl;
        }
        
    }
}
