
import fetch from 'node-fetch';

export const getDocumentos = async (req, res) => {
    try {
        return res.json("hola mundo");
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
};
