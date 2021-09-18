import { divProizvodi } from "../constants.js"
import { Proizvod } from "./proizvodi.js"

export class Korisnik {

    static registrovaniKorisnici = []

    username
    password

    constructor(username, password){

        this.username = username
        this.password   = password

    }

}



export class Kupac extends Korisnik{

    #korpa
    constructor(username, password){
        super(username, password)
        this.#korpa = []
    }


    get korpa(){
        return this.#korpa
    }

  

    dodajUKorpu(proizvod, kolicina){
        this.#korpa.push({
            proizvod:proizvod, 
            kupljenaKolicina:kolicina
        })
    }

    obrisiIzKorpe(item){
        //brisanje iz korpe metod, item koji joj se posalje da obrise iz korpe, metoda vezana za objekat kreiran sa Kupac
        this.#korpa.splice(item,1)
    }

    addKorisnikToDom(){

        const divOmotac = document.querySelector('#korisnik')
        divOmotac.innerHTML = ''

        const divKorisnik = document.createElement('div')
        
        const naslov = document.createElement('h3')
        naslov.textContent = this.username

        const divKorpa = document.createElement('div')
        this.#korpa.forEach(item => {
            const divItem = document.createElement('div')
            const opis = document.createElement('p')
            opis.innerHTML = `${item.proizvod.naziv} <br> ${item.proizvod.cena} <br> ${item.kupljenaKolicina}`

            const btnDeleteItem = document.createElement('button')
            btnDeleteItem.textContent = 'Obrisi iz korpe'

            btnDeleteItem.addEventListener('click',()=>{
                //brisanje iz korpe na klik dugmeta 'Obrisi'
                this.obrisiIzKorpe(item)

                divOmotac.append(this.addKorisnikToDom())
                //vracamo stanje
                item.proizvod.stanje += Number(item.kupljenaKolicina)
                divProizvodi.append(Proizvod.addProizvodToDom(this))

            })

            divItem.append(opis, btnDeleteItem)
            divKorpa.append(divItem)

        })

        divKorisnik.append(naslov, divKorpa)

        return divKorisnik


    }

}




export class Admin extends Korisnik{
constructor(username, password){
    super(username, password)
}


    kreirajNoviProizvod(){

    }

}









