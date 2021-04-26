export class Empleado {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
  salario: number;

  constructor(id:number, nombre:string, apellido:string, sexo:string, salario:number){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.salario = salario;
  }
}
