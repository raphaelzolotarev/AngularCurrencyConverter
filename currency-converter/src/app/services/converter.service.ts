import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrencyConversionResponse} from "../models/CurrencyConversionResponse";
import {environment} from "../../environments/environment";
@Injectable({
 providedIn: 'root'
})
export class ConverterService {
 private apiKey = environment.apiKey;
 constructor(private http: HttpClient) {}
 getCurrencyData(): Observable<CurrencyConversionResponse> {
 const url: string = `https://openexchangerates.org/api/latest.json?
app_id=${this.apiKey}`;
 return this.http.get<CurrencyConversionResponse>(url);
 }
}
