export class Experiencias {
    id?: number;
    compania: String;
    tareas: String;
    fechainiyfina: String;
    imgtrabajo: String;
    puesto: String;

    constructor(compania: String, tareas: String, fechainiyfina: String, imgtrabajo: String, puesto: String){
        this.tareas = tareas;
        this.compania= compania;
        this.fechainiyfina= fechainiyfina;
        this.imgtrabajo= imgtrabajo;
        this.puesto= puesto;
    }


}


