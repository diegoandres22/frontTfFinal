export class Estudios {

    id?: number;
    colegio: string;
    titulo_obtenido: string;
    fechainiyfin: string;
    img_instituto: string;

    constructor(colegio: string, titulo_obtenido: string, fechainiyfin: string, img_instituto: string) {
        this.colegio = colegio;
        this.titulo_obtenido = titulo_obtenido;
        this.fechainiyfin = fechainiyfin;
        this.img_instituto = img_instituto;

    }
}
