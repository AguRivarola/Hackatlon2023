const app = require('./app.js')

// Escuchamos en el puerto correspondiente
app.listen(4000, () => {
    console.log(`Chatbot escuchando en el puerto ${process.env.PORT}!`);
});
