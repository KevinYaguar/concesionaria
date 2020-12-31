class Vehicle {
    constructor(marca, modelo, precio){
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}
class Car extends Vehicle {
    constructor(marca, modelo, puertas, precio){
        super(marca, modelo, precio),
        this.puertas = puertas
    }   
}

class Moto extends Vehicle {
    constructor(marca, modelo, cilindrada, precio){
        super(marca, modelo, precio),
        this.cilindrada = cilindrada
    }
}

class Consola {
    getVehicles(vehicles){
        vehicles.forEach(item =>{
            console.log(`Marca: ${item.marca}  // Modelo: ${item.modelo} // ${item.puertas ? `${item.puertas}`: `${item.cilindrada}`} // Precio: $${item.precio}`);
        })
    } 
    getMostExpensive(vehicles){
        const precies = vehicles.map(vehicle=>{
            let price = parseFloat(vehicle.precio.replace('.', '').replace(',', '.'))
            return price;
        })

        const mayor = Math.max(... precies);

        vehicles.forEach(vehicle=>{
            let price = parseFloat(vehicle.precio.replace('.', '').replace(',', '.'))
            if( price === mayor){
                console.log(`Vehículo más caro: ${vehicle.marca +" "+ vehicle.modelo}`);
            }
        })

    }
    getCheaper(vehicles){
        const precies = vehicles.map(vehicle=>{
            let price = parseFloat(vehicle.precio.replace('.', '').replace(',', '.'))
            return price;
        })

        const menor = Math.min(... precies);

        vehicles.forEach(vehicle=>{
            let price = parseFloat(vehicle.precio.replace('.', '').replace(',', '.'))
            if( price === menor){
                console.log(`Vehículo más barato: ${vehicle.marca +" "+ vehicle.modelo}`);
            }
        })

    }

    getThatOne(array, letra){
        array.forEach(item => {
            if(item.modelo.indexOf(letra) >= 0){
                console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${item.marca} ${item.modelo} $${item.precio}`)
            }
        })
    }

    getMayorMenor(array){
        array.sort((a, b) =>{
            return parseFloat(b.precio.replace('.', '').replace(',', '.') - parseFloat(a.precio.replace('.', '').replace(',', '.')))
        })
        console.log('Vehículos ordenados por precio de mayor a menor:');
        array.forEach(item =>{
            console.log(`Marca: ${item.marca} ${item.modelo}`)
        })
    }

}

const v1 = new Car('Peugeot', '206', '2', '200.000,00');
const v2 = new Moto('Honda ', 'Titan', '125cc' ,'60.000,00')
const v3 = new Car('Peugeot', '208', '5', '250.000,00');
const v4 = new Moto('Yamaha ', 'YBR', '160cc' , '80.500,50')

const vehicles = [v1, v2, v3, v4];

const consola = new Consola();
consola.getVehicles(vehicles);
console.log('=============================');
consola.getMostExpensive(vehicles);
consola.getCheaper(vehicles);
consola.getThatOne(vehicles, 'Y');
console.log('=============================');
consola.getMayorMenor(vehicles);



