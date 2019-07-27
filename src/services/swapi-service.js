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
        return res.results;
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getPerson(id){
        return this.getResource(`/people/${id}`);
    }

    getPlanet(id){
        return this.getResource(`/planets/${id}`);
    }

    getStarship(id){
        return this.getResource(`/starships/${id}`);
    }
    
}