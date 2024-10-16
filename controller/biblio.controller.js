import fetch from 'node-fetch';
import 'dotenv/config';


export const getDocumentos = async (req, res) => {
  try {

    const busqueda = req.params.busqueda

    const payload = {
        "search_query": busqueda,
        "documents": [
          "https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/5cd7d646-8b32-11ef-b357-02420a00014c/CPEUM.pdf"
        ]
      };
      
    const response = await fetch("https://api.gooey.ai/v2/doc-search", {
      method: "POST",
      headers: {
        "Authorization": `bearer ${process.env.GOOEY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const result = await response.json();
    
    // Return the result to the client
    return res.status(200).json(result);

  } catch (error) {
    console.error('Error fetching documents:', error);
    return res.status(400).json({ message: "Algo salió mal", error: error.message });
  }
};
