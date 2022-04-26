import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { PacientesService } from 'src/app/services/pacientes/pacientes.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styles: [
  ]
})
export class NewPatientComponent implements OnInit {

  @Input () _input: any; 
  @Output () _output: EventEmitter<any> = new EventEmitter();
  
  public pacienteForm: FormGroup;
  fotoPersonal: String = "";

  constructor(private fb: FormBuilder, private pacientesService: PacientesService, private router: Router) {

    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required ],
      rut: ['', Validators.required ],
      edad: ['', Validators.required ],
      fechaIngreso: ['', Validators.required],
      enfermedad: ['', Validators.required]
    });

   }

  ngOnInit(): void {
    if(this._input=='actualizar'){
      alert('actualizar')
    }    
  }

  // eventos

  async savePaciente(){
    console.log("savePaciente", this.pacienteForm.value);
    console.log((<HTMLInputElement>document.querySelector('#input-revisado')).checked);
    console.log((<HTMLInputElement>document.querySelector('#input-sexo')).value);

    if(this.pacienteForm.invalid 
      ||
      (<HTMLInputElement>document.querySelector('#input-sexo')).value==''
      ){
      return alert('campos invalidos');
    }

    const postObj: Paciente = {
      ...this.pacienteForm.value,
      sexo: (<HTMLInputElement>document.querySelector('#input-sexo')).value,
      revisado: (<HTMLInputElement>document.querySelector('#input-revisado')).checked,
      fotoPersonal: this.fotoPersonal
    };
  

    function getSizeJSON(obj: any){
      const size_ = new TextEncoder().encode(JSON.stringify(obj)).length;
      const kiloBytes_ = size_ / 1024;
      const megaBytes_ = kiloBytes_ / 1024;
      return {
        size: size_,
        kiloBytes: kiloBytes_,
        megaBytes: megaBytes_
      }
    }

    console.log("postObj", postObj);
    console.log(getSizeJSON(postObj));

    const request: any = await this.createPaciente(postObj);
    console.log('savePaciente() response', request); // .errors?
    if(request._id){
      return this.router.navigate(['/listar-todos'])
    }
    alert('error en el servicio');    

  }

  

  async handleFileInput(event: any){

    const toBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    console.log('handleFileInput', event);
     /*Maximum allowed size in bytes
        20MB */
    const maxAllowedSize = 20 * 1024 * 1024;
    if (event.target.files[0].size > maxAllowedSize) {
      // Here you can ask your users to load correct file
      alert('archivo supera limite de peso');
    }else{
      this.fotoPersonal = "" + await toBase64(event.target.files[0]);
    }

  }
  
  // servicios 
  
  async createPaciente(postObj: Paciente){
    return new Promise( (resolve, reject) => 
      this.pacientesService.postPaciente(postObj).subscribe( 
        response => {
          console.log("success postPaciente() ", response);
          resolve(response);
        },
        error => {
          console.log("error postPaciente() ", error);
          reject(error);
        }
      )
    )
  }

}
