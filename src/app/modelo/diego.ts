export class Diego {
    id?: number;
    nombre: string;
    titulo: string;
    parrafo_f: string;
    parrafo_s: string;
    imgperfil: string;
    imgbanner: string;
    curriculum: string;

    constructor(nombre: string, titulo: string, parrafo_f: string, parrafo_s: string, imgperfil: string, imgbanner: string, curriculum: string) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.parrafo_f = parrafo_f;
        this.parrafo_s = parrafo_s;
        this.imgperfil = imgperfil;
        this.imgbanner = imgbanner;
        this.curriculum = curriculum;
    }
}
