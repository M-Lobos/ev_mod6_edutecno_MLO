import { v4 as uuidv4 } from 'uuid';
import {
	createDataFile,
	permaDeleteDataMonoChino,
	readAllDataOfMonoChino,
	updateDataMonoChino,
	getAnimeByName,
	getAnimeById
} from '../utils/utilsFile.js';

export class Anime {

	#id
	#nombre
	#genero
	#anio
	#autor

	constructor(nombre, genero, anio, autor) {
		this.#id = uuidv4().slice(0, 10)
		this.#nombre = nombre;
		this.#genero = genero;
		this.#anio = anio;
		this.#autor = autor;
	}
	//getters
	getId() { return this.#id }
	getNombre() { return this.#nombre }
	getGenero() { return this.#genero }
	getAnio() { return this.#anio }
	getAutor() { return this.#autor }

	//setters
	setId(newId) { this.#id = newId }
	setNombre(nombre) { this.#nombre = nombre }
	setGenero(genero) { this.#genero = genero }
	setAnio(anio) { this.#anio = anio }
	setAutor(autor) { this.#autor = autor }

	getAllProperties() {
		return {
			id: this.getId(),
			nombre: this.getNombre(),
			genero: this.getGenero(),
			anio: this.getAnio(),
			autor: this.getAutor()
		}
	}

	static async createMonoChino(dataMonoChino) {
		try {
			const { nombre, genero, anio, autor } = dataMonoChino;
			const anime = new Anime(nombre, genero, anio, autor);
			const animeObject = anime.getAllProperties();

			await createDataFile(animeObject, 'anime.json');

			return animeObject;
		} catch (error) {
			throw new Error('No se pudo crear un nuevo 🐒chino', error);
		}
	}

	static async readMonosChinos() {
		try {
			const allMonos = await readAllDataOfMonoChino('anime.json');
			return allMonos;
		} catch (error) {
			throw new Error('No se pudo obtener datos de los 🐒chinos', error);
		}
	}

	static async actualizarMonoChino(id, dataMonoChino) {
		try {
			const actualizaMonoChino = await updateDataMonoChino(id, dataMonoChino, 'anime.json')
			return actualizaMonoChino
		} catch (error) {
			throw new Error('No se pudo obtener datos de los 🐒chinos', error);
		}
	}

	static async borrarMonoChinoHard(id) {
		try {
			const borrarMonoChino = await permaDeleteDataMonoChino(id, 'anime.json');
			return borrarMonoChino
		} catch (error) {
			throw new Error(`Fallo al eliminar de forma permanente el 🐒chino`, error);
		}
	}

	static async buscarMonosChinosPorId(id) {
        try {
            const idAnime = await getAnimeById(id, 'anime.json')
            return idAnime
        } catch (error) {
            throw new Error("Error al obtener los datos del animé", error);
        }
    }
	
    static async buscarMonosChinosPorNombre(nombre) {
        try {
            const nombreAnime = await getAnimeByName(nombre, 'anime.json')
            return nombreAnime
        } catch (error) {
            throw new Error("Error al obtener los datos del animé", error);
        }
    }

};


