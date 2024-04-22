let iife = (function(){
    function privada(url,id){
        console.log(`url es: ${url}`)
        console.log(`id es: ${id}`)
        id.setAttribute("src",url);
    }
    return {
        publica:(url,id)=>privada(url,id)
    }
})();




class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    };
    get url(){
        return this.getUrl();
    }
    setInicio(tiempoVideo){
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        this.id = id
    }
    playMultimedia(){
        iife.publica(this.url,this.id)
    }
    setInicio(tiempo){
        this.id.setAttribute("src",`${this.url}?start=${tiempo}`)
    } 
}

// instanciar una clase
const idMusica = document.getElementById("musica")
let musica  = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY",idMusica)
musica.playMultimedia()

const idPelicula = document.getElementById("peliculas")
let pelicula  = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY",idPelicula)
pelicula.playMultimedia()
pelicula.setInicio(20)


const idSeries = document.getElementById("series")
let series  = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY",idSeries)
series.playMultimedia()