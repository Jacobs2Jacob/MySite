import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { MailMessage } from '../entities/mail-message';
import { Observable, Subscription } from 'rxjs';  

@Injectable()
export class ContactService {

    private gateway = 'api/Email'; 

    constructor(private client: HttpClient) { }

    send(message: MailMessage): Observable<boolean>
    {
        return this.client.post<{ isSuccess: boolean }>(this.gateway + '/Send', message)
            .map(res => res.isSuccess); 
    }

}
