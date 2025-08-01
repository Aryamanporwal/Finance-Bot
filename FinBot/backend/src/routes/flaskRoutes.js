import express from "express";
import axios from "axios";

const router = express.Router();

router.post('/flask/ingest', async (req, res) => {
    try {
        // Forward request body to Flask
        const response = await axios.post('http://localhost:5001/ingest', req.body);
        res.json(response.data);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to contact Flask service' });
    }
});

export default router;