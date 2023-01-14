export class Proyecto {
  
    id?: number;
    img1: String;
    img2: String;
    img3: String;
    url: String;
   
    constructor(img1: String, img2: String, img3: String, url: String){

        this.img1 = img1;
        this.img2= img2;
        this.img3 = img3;
        this.url= url;
    }
}
