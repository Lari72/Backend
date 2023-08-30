const fs = require('fs')

const persona = async () =>{
await fs.promises.writeFile("./persona.txt", "Hola como estas?");
await fs.promises.appendFile("./persona.txt", "\nBien y tu?")
let respuesta = await fs.promises.readFile("./persona.txt", "utf-8")
console.log(respuesta)


await fs.promises.unlink("./persona.txt")
};
persona();