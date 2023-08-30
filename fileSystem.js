
 import {promises as fs} from "fs"

 class ProductManager{
    constructor(){

        this.path ="./productos.txt"
        this.products = []

    }

    static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock, 
            id: ProductManager.id
        };

        this.products.push(newProduct)

        // console.log(newProduct)

        await fs.writeFile(this.path, JSON.stringify(this.products));
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.path, "utf-8");
        return JSON.parse(respuesta);
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts();
        return console.log(respuesta2);
       
    }

 getProductsById = async (id) => {
    let respuesta3 = await this.readProducts();
    if(!respuesta3.find(product => product.id === id)){
        console.log("Producto no encontrado")
    }else{
        console.log(respuesta3.find(product => product.id === id));
    }

   

 }
}
 const productos = new ProductManager();

//  productos.addProduct("producto prueba1", "este es un producto prueba1", 200, "thumbnail1", "abc123", 25)
//  productos.addProduct("producto prueba2", "este es un producto prueba2", 20, "thumbnail1", "abc123", 26)
//  productos.addProduct("producto prueba3", "este es un producto prueba3", 20, "thumbnail1", "abc123", 27)

productos.getProducts()

productos.getProductsById(3)
