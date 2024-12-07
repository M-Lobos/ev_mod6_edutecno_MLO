import { createFile, readFile } from "../services/fileServices.js";

//método post
export const createDataFile = async (dataMonoChino, dataPath) => {
    try {
        const datafile = await readFile(dataPath);
        let dataJson = null
        !datafile || datafile.length === 0 ? (dataJson = [dataMonoChino]) : dataJson = [ ...datafile, dataMonoChino ]
        await createFile(dataJson, dataPath)
    } catch (error) {
        throw new Error(`Error al gestionar la creación del archivo con la data`, error)
    }
};

// metodo get
export const readAllDataOfMonoChino = async (dataPath) => {
    try {
        const allMonosChinos = await readFile(dataPath);
        return allMonosChinos;
    } catch (error) {
        throw new Error(`Error al traer el archivo con la data de 🐒chinos`, error)

    }
    
}

export const updateDataMonoChino = async (id, newData, pathData) => {
    try {
        const dataMonoChino = await readFile(pathData);
        const indexDataMonoChino = dataMonoChino.findIndex(dataFound => dataFound.id === id);

        if (indexDataMonoChino === -1) console.error('No pudimos actualizar el 🐒Chino ')


        const olddataMonoChino = { ...dataMonoChino[indexDataMonoChino] }

        dataMonoChino[indexDataMonoChino] = { id, ...newData };
        await createFile(dataMonoChino, pathData)

        return olddataMonoChino

    } catch (error) {
        throw new Error('No pudimos actualizar el 🐒Chino', error)
    }
}

export const permaDeleteDataMonoChino = async (id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex(dataFound => dataFound.id === id);

        if (indexData === -1) throw new Error(`No pudimos encontrar la data`);

        const dataDelete = data[indexData]
        data.splice(indexData, 1)

        await createFile(data, pathData)

        return dataDelete
    } catch (error) {
        throw new Error("No pudimos actualizar la data", error);
    }
}

export const getAnimeById = async (id, pathData) => {
    try {
        const data = await readFile(pathData)
        const dataFound = data.find(dataFound => dataFound.id === id)

        return dataFound
    } catch (error) {
        throw new Error('No pudimos encontrar el animé por el id', error)
    }
}

export const getAnimeByName = async (nombre, pathData) => {
    try {
        const data = await readFile(pathData);

        const nameNormalized = nombre.toLocaleLowerCase().replace(/\s+/g, '')

        const anime = data.filter(
            (anime) =>
                anime.nombre.toLocaleLowerCase().replace(/\s+/g, '') === nameNormalized
        );
        return anime
    } catch (error) {
        throw new Error('No pudimos encontrar el animé por el nombre', error)
    }


}



