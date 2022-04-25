
import { API_URL } from "../global.service";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PacientesService {

    SERVICE_URL;

    constructor(private http: HttpClient){
        this.SERVICE_URL = API_URL + '/pacientes';
    }

    getPacientes() {
        console.log(this.SERVICE_URL);
        return this.http.get(this.SERVICE_URL);
    }

}