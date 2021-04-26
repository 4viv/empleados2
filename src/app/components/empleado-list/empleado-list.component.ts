import { Empleado } from './../../Models/Empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    {id: 1, nombre: 'Hiram', apellido: 'Razo', sexo: 'Masculino', salario: 27000},
    {id: 2, nombre: 'Aviv', apellido: 'Castañon', sexo: 'Masculino', salario: 32000},
    {id: 3, nombre: 'Veronica', apellido: 'Ramirez', sexo: 'Femenino', salario: 22000},
    {id: 4, nombre: 'Luna', apellido: 'Perez', sexo: 'Femenino', salario: 25500},
    {id: 5, nombre: 'Alma', apellido: 'Diaz', sexo: 'Femenino', salario: 27000}
  ];

  rbSelect: string = 'Todos'; // Valor que muestra por defecto

  constructor() { }

  ngOnInit(): void {
  }

  totalEmpleados(): number {
    return this.listEmpleados.length;
  }

  totalFemenino() {
    return this.listEmpleados.filter(emp => emp.sexo === 'Femenino').length;
  }

  totalMasculino(): number {
    return this.listEmpleados.filter(emp => emp.sexo === 'Masculino').length;
  }

  setRbSelect(rbSelect: string){
    // Cambia el valor del radio button
    this.rbSelect = rbSelect;
  }
}
