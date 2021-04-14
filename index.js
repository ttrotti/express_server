import express from 'express';

const app = express();
let files = [
	{
		"title": "zapatillas",
		"price": "1369.10",
		"thumbnail": "link.foto.com",
		"id": 1
	},
	{
		"title": "medias",
		"price": "6710.88",
		"thumbnail": "link.foto.com",
		"id": 2
	},
	{
		"title": "calzas",
		"price": "1592.85",
		"thumbnail": "link.foto.com",
		"id": 3
	},
	{
		"title": "pantalones",
		"price": "2698.54",
		"thumbnail": "link.foto.com",
		"id": 4
	},
	{
		"title": "camisa",
		"price": "4442.42",
		"thumbnail": "link.foto.com",
		"id": 5
	},
	{
		"title": "remera",
		"price": "2661.01",
		"thumbnail": "link.foto.com",
		"id": 6
	},
	{
		"title": "gorro",
		"price": "6155.50",
		"thumbnail": "link.foto.com",
		"id": 7
	},
	{
		"title": "anteojos",
		"price": "5906.94",
		"thumbnail": "link.foto.com",
		"id": 8
	},
	{
		"title": "lentes",
		"price": "661.73",
		"thumbnail": "link.foto.com",
		"id": 9
	}
]

const PORT = 8080;
let getItemsCounter = 0;
let getRandomItemCounter = 0;

app.get('/items', (req, res) => {
    res.send({items: files, cantidad: files.length + 1});
    getItemsCounter++;
});

app.get('/item-random', (req, res) => {
    res.send({item: files[parseInt(Math.random() * files.length)]});
    getRandomItemCounter++;
})

app.get('/visitas', (req, res) => {
    res.send({visitas: {
        items: getItemsCounter,
        item: getRandomItemCounter
    }});
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

server.on('error', err => console.log("Error message:" + err))