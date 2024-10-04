import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PreguntasService } from '../../../../services/preguntas/preguntas.service';
import { Router } from '@angular/router';
import { Pregunta } from '../../../../model/pregunta/pregunta.model';
import { AgregarEditarPreguntaComponent } from './agregar-editar-pregunta/agregar-editar-pregunta.component';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {

  private router = inject(Router);

  // the columns that will be displayed in the employee details table
  displayedColumns: string[] = [
    'id',
    'idPropio',
    'categoria',
    'pregunta',
    'action'
  ];

  // employee list will be assigned to this and it is passed as the data source to the mat-table in the HTML template 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // dependency injection
  constructor(
    private dialog: MatDialog,
    private empService: PreguntasService,
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmployeeDialog() {
    const dialogRef = this.dialog.open(AgregarEditarPreguntaComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  getEmployeeList() {
    this.empService.getPreguntasByUsuario("hola").subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res.preguntas);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log("El error es: " + err);
        localStorage.removeItem("token");
        this.router.navigate([""]);
      },
    });
  }
  // for searching employees with firstname, lastname, gennder, etc
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    let confirm = window.confirm("Are you sure you want to delete this employee?");
    if (confirm) {
      this.empService.deletePregunta(id).subscribe({
        next: (res) => {
          alert('Employee deleted!');
          this.getEmployeeList();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(AgregarEditarPreguntaComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      }
    });
  }
}
