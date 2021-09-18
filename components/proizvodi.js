import { Korisnik } from "./korisnici.js";
import { divProizvodi, divKorisnik } from "../constants.js";





export class Proizvod {
    static proizvodi = []
    naziv 
    cena
    stanje
    constructor(naziv, cena, stanje){
        this.naziv = naziv
        this.cena = cena
        this.stanje = stanje
    }

    toString(){
        return `${this.naziv} <br> ${this.cena} <br> Stanje: ${this.stanje}`
    }

    static addProizvodToDom(user){

        divProizvodi.innerHTML = ''

        const divLista = document.createElement('div')

        Proizvod.proizvodi.forEach(proizvod => {

            
            const divProizvod = document.createElement('div')

            const pOpis = document.createElement('p')
            pOpis.innerHTML = proizvod.toString()

            divProizvod.append(pOpis)

            //proveravamo da li je undefined i da li deo Korisnika
            if(user instanceof Korisnik){

            const inputKol = document.createElement('input')
            inputKol.type = 'number'

            const btnDodajUKorpu = document.createElement('button')
            btnDodajUKorpu.textContent = 'Dodaj u korpu'

            btnDodajUKorpu.addEventListener('click',()=>{          
                
                //update stanje
                if(proizvod.stanje >= Number(inputKol.value) && inputKol.value != ''){
                //dodavanje u korpu
                //user.dodajUKorpu()
                    user.dodajUKorpu(proizvod, inputKol.value)
                    divKorisnik.append(user.addKorisnikToDom())
                    proizvod.stanje -= Number(inputKol.value)
                    divProizvodi.append(Proizvod.addProizvodToDom(user))
                }else{
                    console.log(`Nema dovoljno na stanju.`);
                }

            })

            divProizvod.append(inputKol, btnDodajUKorpu)
        }

            divLista.append(divProizvod)

        })


       
        return divLista

    }

}



export class PrehrambeniProizvod extends Proizvod{
    rokTrajanja
    constructor(naziv, cena, stanje, rokTrajanja){
        super(naziv, cena, stanje)
        this.rokTrajanja = rokTrajanja
    }

    toString(){
        return super.toString() + `<br> ${this.rokTrajanja}`
    }


    
}




export class BelaTehnika extends Proizvod{
    garancija
    constructor(naziv, cena, stanje, garancija){
        super(naziv, cena, stanje)
        this.garancija = garancija
    }
    
    toString(){
        return super.toString() + `<br> ${this.garancija}`
    }
}



















