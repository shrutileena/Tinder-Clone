import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.POR || 8001;
const connection_url = `mongodb+srv://admin:Tb1ba9AeHomQ58cM@cluster0.n6z3w.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());

// DB Config
mongoose.connect(connection_url, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Shru!!!"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));