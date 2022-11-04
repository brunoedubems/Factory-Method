import { BicicletaFactory } from './factories/bicicleta-factory';
import { CarroFactory } from './factories/carro-factory';


/*Sem factory → atrelado a classe CARRO por conta do NEW
import { Carro } from './veiculos/carro';
const fusca = new Carro('Fusca');

fusca.pickUp('Fernanda');
fusca.parar();
const celta = new Carro('celta');
celta.pickUp('Natan');
celta.parar();
*/

const carroFactory = new CarroFactory();
const bicicletaFactory = new BicicletaFactory();
console.log(carroFactory);

const donoNome = ['Fernanda', 'Marlon', 'Natan', 'Bruno'];
const carro1 = carroFactory.getVeiculo('Fusca');
const carro2 = carroFactory.getVeiculo('Celta Preto');
const bicicleta1 = bicicletaFactory.getVeiculo('bike');
carro1.perfil(donoNome[0]);
carro1.parar();
bicicleta1.perfil(donoNome[2]);