import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { MailMessage } from '../entities/mail-message';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})

export class ContactComponent implements OnInit {

    form: FormGroup;
    
    constructor(private contactService: ContactService,
                private fb: FormBuilder) { }
    
    ngOnInit() {
        this.createForm();
    }

    createForm() 
    {
        this.form = this.fb.group({
            FirstName: new FormControl('', Validators.required),
            LastName: new FormControl('', Validators.required),
            Subject: new FormControl('', Validators.required),
            Body: new FormControl('', Validators.required)
        });
    }

    onSubmit()
    { 
         if (this.form.valid) { 
             this.contactService.send
             ({
                Body: this.form.value.Body,
                Subject: this.form.value.Subject,
                From: { DisplayName: this.form.value.FirstName + ' ' + this.form.value.LastName, Address: 'QuickNet' }
             })
             .subscribe(
                success => console.log(success ? 'Sent successfully' : 'Failed to send message'),
                err => console.log(err)
             );
        }
    }
}
