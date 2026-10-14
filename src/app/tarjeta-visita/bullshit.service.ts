import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class BullshitService {
  private http = inject(HttpClient);

  generarPuesto(): Observable<string> {
    return this.http
      .get<{ phrase: string }>('https://corporatebs-generator.sameerkumar.website/')
      .pipe(map(r => r.phrase));
  }
}