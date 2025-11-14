class Heroe {
    constructor(nombre, atributos, rol){
        this.nombre=nombre;
        this.atributos=atributos;
        this.rol=rol;
    }
    informacion(){
       return `${this.nombre} - ${this.atributos} - ${this.rol}`;
    }
}

class Doom extends Heroe{
    constructor(nombre, atributos, rol, habilidad_especial){
        super(nombre, atributos, rol);
        this.habilidad_especial=habilidad_especial;
    }
    informacion(){
       return `${this.nombre} - ${this.atributos} - ${this.rol} - ${this.habilidad_especial}`;
}
}
class Crystal_Maiden extends Heroe{
    constructor(nombre, atributos, rol, habilidad_especial){
        super(nombre, atributos, rol);
        this.habilidad_especial=habilidad_especial;
    }
    informacion(){
       return `${this.nombre} - ${this.atributos} - ${this.rol} - ${this.habilidad_especial}`;
}
}
class Juggernaut extends Heroe{
    constructor(nombre, atributos, rol, habilidad_especial){
        super(nombre, atributos, rol);
        this.habilidad_especial=habilidad_especial;
    }
    informacion(){
       return `${this.nombre} - ${this.atributos} - ${this.rol} - ${this.habilidad_especial}`;
}
}

class Bane extends Heroe{
    constructor(nombre, atributos, rol, habilidad_especial){
        super(nombre, atributos, rol);
        this.habilidad_especial=habilidad_especial;
    }
    informacion(){
       return `${this.nombre} - ${this.atributos} - ${this.rol} - ${this.habilidad_especial}`;
}
}
let doom1 = new Doom("Doom", "Fuerza", "Offlaner", "Doom Infernal");
let crystal1 = new Crystal_Maiden("Crystal Maiden", "Inteligencia", "Hard Support", "Campo de Hielo");
let juggernaut1 = new Juggernaut("Juggernaut", "Agilidad", "Hard Carry", "Omnislash");
let bane1 = new Bane("Bane", "Universal", "Support", "Garra del Diablo");

let heroes=[doom1,crystal1,juggernaut1,bane1];


function mostrarHeroes(){
    let lista= document.getElementById('listaheroes');
   
 

    for(let heroe of heroes){
        let item = document.createElement('li');
        item.innerText = heroe.informacion();
        lista.appendChild(item);
    }
 
}