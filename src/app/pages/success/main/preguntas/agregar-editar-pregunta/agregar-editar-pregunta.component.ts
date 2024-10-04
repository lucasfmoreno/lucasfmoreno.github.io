import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreguntasService } from '../../../../../services/preguntas/preguntas.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-editar-pregunta',
  templateUrl: './agregar-editar-pregunta.component.html',
  styleUrl: './agregar-editar-pregunta.component.css'
})
export class AgregarEditarPreguntaComponent implements OnInit {
  preguntaForm: FormGroup;

  constructor(
    private preguntaService: PreguntasService,
    private dialogRef: MatDialogRef<AgregarEditarPreguntaComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.preguntaForm = this.formBuilder.group({
      id: ['',],
      usuario: ["hola", ],
      idPropio: ['', Validators.required],
      categoria: ['', Validators.required],
      pregunta: ['', Validators.required],
      respuesta: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.preguntaForm.patchValue(this.data);
  }

  onSubmit() {
    console.log("Llego aca.");
    if (this.preguntaForm.valid) {
      console.log("Llego aca, es valid.");
      if (this.data) {
        this.preguntaService
          .updatePregunta(this.data.id, this.preguntaForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Pregunta actualizada!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(JSON.stringify(err.error));
              if (err.error) {
                var objetoError = err.error;
                console.log(JSON.stringify(objetoError));
                if (objetoError.status.message) {
                  alert(objetoError.status.message);
                }
              } else {
                alert("Error al intentar actualizar la pregunta!");
              }
            },
          });
      } else {
        console.log("Llego aca, else.");
        this.preguntaService
        .addPregunta(this.preguntaForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Pregunta agregada!');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(JSON.stringify(err.error));
            if (err.error) {
              var objetoError = err.error;
              console.log(JSON.stringify(objetoError));
              if (objetoError.status.message) {
                alert(objetoError.status.message);
              }
            } else {
              alert("Error al intentar agregar la pregunta!");
            }
          },
        });
      }
    }
  }
}
