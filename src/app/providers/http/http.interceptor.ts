import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const environment = {
    origin: 'http://localhost:4902/apiv1',
};

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private router: Router) { console.log(`HttpConfigInterceptor loaded`); }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log(`== === ====` + req.headers);
        const token: string = localStorage.getItem('x-access-token') || '';
        const url1 = req.url.indexOf(`http`) > -1 ? req.url : environment.origin + req.url;
        req = req.clone({ url: url1 });
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        req = req.clone({ withCredentials: true });
        if (token) {
            req = req.clone({ headers: req.headers.set('x-access-token', token) });
            req = req.clone({ headers: req.headers.set('Cache-Control', 'no-cache') });
            req = req.clone({ headers: req.headers.set('Pragma', 'no-cache') });
        }

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.headers.get('x-access-token')) {
                        localStorage.setItem('x-access-token', event.headers.get('x-access-token') as any);
                    }
                    if (event.status === 200) {
                        if (event.body.status === 404) {
                            this.accessDenied(event.body.message);
                        }
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 406 || error.status === 403) {
                    localStorage.clear();
                    if (!(this.router.url === '/internal' || this.router.url === '/')) {
                        this.sessionError(error.error.message);
                        this.router.navigate(['/'], { replaceUrl: true });
                    }
                }
                return throwError(error);
            }));
    }

    accessDenied = (message:any) => {
        //  this.message.create('error', `${message}`);
    }

    sessionError = (message:any) => {
        // const modal: NzModalRef = this.modal.error({
        //     nzTitle: `Please login again.`,
        //     nzContent: `${message}`,
        //     nzMaskClosable: false,
        //     nzClosable: false,
        //     nzFooter: [
        //         {
        //             label: 'Ok',
        //             shape: 'round',
        //             onClick: () => {
        //                 modal.destroy();
        //             }
        //         }
        //     ]
        // });
    }
}
