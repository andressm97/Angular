export class ClassEstudiante {
  
    fechaNacimiento?:string;

    constructor(public id:number,
                public nombre:string,
                public ciudad:string){

                }
    getEdad():number{
        return 0;
    };
}
