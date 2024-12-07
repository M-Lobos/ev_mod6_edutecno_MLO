import { Anime } from "../models/anime.model.js";

export const crearNuevoAnime = async (req, res) => {
    try {
        const dataMonoChino = req.body
        const anime = await Anime.createMonoChino(dataMonoChino);

        res.status(201).json({
            message: "🐒 chino creado exitosamente",
            status: 201,
            anime
        })
    } catch (error) {

        res.status(500).json({
            message: 'Error al crear el 🐒 chino',
            status: 500,
            error
        })
    }
};

export const getAllMonosChinos = async (req, res) => {
    try {
        const dataMonoChino = await Anime.readMonosChinos();
        if (!dataMonoChino) throw new Error('No existen los 🐒chinos', `No se encontraron los 🐒chinos`);
        res.status(200).json({
            message: "🐒 chinos encontrados exitosamente",
            status: 200,
            dataMonoChino
        })
    } catch (error) {

        res.status(500).json({
            message: 'Error al encontrar el o los 🐒 chino(s)',
            status: 500,
            error
        })
    }
}

export const buscarMonosChinosPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const monoChino = await Anime.buscarMonosChinosPorId(id);

        if (!monoChino) throw new NotFoundError("No hay registro", `No se encuentra el id: ${id}`);

        res.status(200).json({
            messsage: '🐒 Chino Encontrado con éxito 😎',
            status: 200,
            monoChino
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el 🐒 Chino",
            status: 500,
            error,
        });
    }
}

export const buscarMonosChinosPorNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const monoChino = await Anime.buscarMonosChinosPorNombre(nombre);

        if (!monoChino) throw new NotFoundError("No hay registro", `No encontramos el nombre del 🐒 Chino: ${nombre}`);

        res.status(200).json({
            messsage: '🐒 Chino Encontrado',
            status: 200,
            monoChino
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el 🐒 Chino",
            status: 500,
            error,
        });
    }
}

export const ActualizacionMonoChino = async (req, res) => {
    try {
        const { id } = req.params
        const dataMonoChino = req.body
        const monoChinoPorActualizar = await Anime.actualizarMonoChino(id, dataMonoChino)

        res.status(201).json({
            message: 'Usuario Actualizado',
            status: 201,
            oldData: monoChinoPorActualizar,
            newData: dataMonoChino
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el 🐒 Chino",
            status: 500,
            error,
        });
    }
}

export const EliminacionPermanenteMonoChino = async (req, res) => {
    try {
        const { id } = req.params

        const MonoChinoEliminado = await Anime.borrarMonoChinoHard(id)

        res.status(200).json({
            message: `🐒 Chino con id ${id} Borrado con éxito`,
            status: 200,
            dataDeleted: MonoChinoEliminado
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al Eliminar el 🐒 Chino",
            status: 500,
            error,
        });
    }
}

