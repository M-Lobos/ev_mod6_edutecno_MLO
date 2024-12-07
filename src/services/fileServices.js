import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createFile = async (dataMonoChino, pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`);

        await fs.mkdir(path.dirname(datafilePath), { recursive: true });

        await fs.writeFile(datafilePath, JSON.stringify(dataMonoChino, null, 4), 'utf8');

    } catch (error) {

        throw new Error('Error al crear el archivo de 🐒chino', error);
    }
};

export const readFile = async (pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        const dataMonoChino = await fs.readFile(datafilePath, 'utf8')
        return JSON.parse(dataMonoChino)
    } catch (error) {
        console.error(`No pudemos leer el archivo: ${error}`);
        return null
    }
};

