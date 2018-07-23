import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { MailMessage } from '../entities/mail-message';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit, OnDestroy {

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    editorValue = '';
    private emailSub: Subscription;

    constructor(private contactService: ContactService) { }

    ngOnInit() { }

    onSubmit(demo)
    {
        this.emailSub = this.contactService.send(new MailMessage())
            .subscribe();
        
    }
}
