import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { MailMessage } from '../entities/mail-message';
import { Observable } from 'rxjs';
 

@Injectable()
export class ContactService {

    private gateway = 'api/email';
    private client: HttpClient;

    send(message: MailMessage): Observable<boolean>
    {
        return this.client.post<{ IsSuccess: boolean }>(this.gateway, message)
            .map(res => res.IsSuccess);
    }

}
