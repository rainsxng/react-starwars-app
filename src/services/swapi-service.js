export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource (url){
        const res = await fetch(`${this._apiBase}${url}`);
        const body = await res.json();
        return body;
    }

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    async getPerson(id){
        const person =  this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getStarship(id){
        const starship =  this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    _extractId ( item ) {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPlanet ( planet ) {
        const id = this._extractId(planet);
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotation: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson ( person ) {
        const id = this._extractId(person);
        return {
            id,
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship ( starship ) {
        const id = this._extractId(starship);
        return {
            id,
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    
}