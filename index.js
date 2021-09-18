// ## Prodavnica



// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.

// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod

// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

// proizvod moze biti prehrambeni ili bela tehnika

// ako je bela tehnika ima i garanciju

// ako je prehrambeni ima rok trajanja

// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe

// DODATNO , NE MORA:
// 4. Ako je korisnik admin moze da doda nov proizvod



import { divProizvodi, formaLogin, inputPassword, inputUsername, divKorisnik } from "./constants.js"
import { Korisnik, Kupac, Admin } from "./components/korisnici.js"
import { Proizvod, PrehrambeniProizvod, BelaTehnika } from "./components/proizvodi.js"





Korisnik.registrovaniKorisnici.push(new Kupac('ana', '123'), new Admin('admin', 'a'))
Proizvod.proizvodi.push(new PrehrambeniProizvod('mleko',200,3,'2.3.2021.'),new BelaTehnika('sporet', 40000, 4, 5))



//console.log(Korisnik.registrovaniKorisnici)
Proizvod.proizvodi.forEach(proizvod => console.log(proizvod.toString()))



divProizvodi.append(Proizvod.addProizvodToDom())


formaLogin.addEventListener('submit',(event)=>{
    event.preventDefault()

    let ulogovaniKorisnik = Korisnik.registrovaniKorisnici.find(korisnik => korisnik.username == inputUsername.value && korisnik.password == inputPassword.value)

    if(ulogovaniKorisnik){
        //prikazati njegovu korpu i ime
        // divProizvodi.innerHTML = ''

        divKorisnik.append(ulogovaniKorisnik.addKorisnikToDom())

        //console.log(ulogovaniKorisnik)

        divProizvodi.append(Proizvod.addProizvodToDom(ulogovaniKorisnik))

    }else{
        console.log(`Ne postoji korisnik sa takvim podacima.`)
    }

})


