import express from 'express';
import axios from 'axios';
const router = express.Router();


//rota /
router.get("/", (req,res) => {
    res.render('index.ejs');
});

router.get('/advice', async (req, res) => {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const advice = response.data.slip.advice;

        res.render('advice', { advice });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro in seeking advice.');
    }
});




// Exporta o objeto router
export { router };