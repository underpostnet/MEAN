
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
        return this.http.get(this.SERVICE_URL);
    }

    postPaciente(postObj: Paciente) {
        return this.http.post(this.SERVICE_URL, postObj);
    }

    getPaciente(id: String) {
        return this.http.get(this.SERVICE_URL + '/' +id);
    }

    updatePaciente(postObj: Paciente, id: String){
        return this.http.put(this.SERVICE_URL + '/' +id, postObj);
    }

    deletePaciente(id: String){
        return this.http.delete(this.SERVICE_URL + '/' +id);
    }

    createImage(id: String, image: File){
        return this.http.post(this.SERVICE_URL + '/uploads/' + id, image);
    }

    getImage(id: String){
        return this.http.get(this.SERVICE_URL + '/uploads/' + id);
    }

}