
import { API_URL } from "../global.service";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from "src/app/models/paciente.model";

@Injectable()
export class PacientesService {

    SERVICE_URL;

    constructor(private http: HttpClient){
        this.SERVICE_URL = API_URL + '/pacientes';
    }

    getPacientes() {
        console.log("getPacientes()", this.SERVICE_URL);
        return this.http.get(this.SERVICE_URL);
    }

    postPaciente(postObj: Paciente) {
        console.log("postPaciente()", postObj);
        return this.http.post(this.SERVICE_URL, postObj);
    }

}