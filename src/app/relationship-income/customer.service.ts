import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MOCK_HEADERS, MOCK_PAGEMODEL } from './models/customer-data';
import { Header } from './models/header.model';
import { PageModel } from './models/pagemodel.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  headers$: Observable<Header[]> = MOCK_HEADERS;
  pageModel$: Observable<PageModel> = MOCK_PAGEMODEL;

  constructor() {}
}
