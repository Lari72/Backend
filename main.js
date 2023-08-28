class ProductManager {
    constructor(){
     this.products = [];

     }
    
     static id = 0

     addProduct(title, description, price, image,  code, stock) {
        for(let i = 0; i < this.products.length; i++) {
            
            if(this.products[i].code === code) {
                console.log('El codigo ${code} esta repetido');
                break;
            }
        }
        
const newProduct = {
    title, 
    description, 
    price, 
    image, 
    code, 
    stock,

}; 

if(!Object.values(newProduct).includes(undefined)){


        ProductManager.id++

      this.products.push({
        ...newProduct,
        id:ProductManager.id,
     });

    }else{
        console.log("todos los campos son requieridos")
        
    }
    }

    getProduct() {
        return this.products;
    }

    existe(id){
        return this.products.find((producto) => producto.id === id)
    }
    getProductById(id){
        !this.existe(id) ? console.log("Not found"): console.log(this.existe(id));
        }
    }

const productos = new ProductManager();
// arreglo vacio 
console.log(productos.getProduct());
// Agregamos producto 

productos.addProduct("titulo1", "descripcion1", 1000, "imagen1", "abc123", 5);
productos.addProduct("titulo2", "descripcion2", 1000, "imagen1", "abc123",);

// Arreglo con productos
console.log(productos.getProduct());

// validacion de code repetido 

productos.addProduct("titulo3", "descripcion2", 1000, "imagen1", "abc124", 7);

// Busqueda de producto por ID 
productos.getProductById(2);

// Busqueda por Id no encontradio
productos.getProductById(3); 