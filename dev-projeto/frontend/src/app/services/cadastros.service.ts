import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  constructor() { }
}
