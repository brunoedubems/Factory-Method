import { VeiculoFactory } from './veiculo-factory';
import { Carro } from '../veiculos/carro';
import { Veiculos } from '../veiculos/veiculos';

 // vai implementar o getVeiculo, sobreescrever
export class CarroFactory extends VeiculoFactory {
  getVeiculo(nomeVeiculo: string): Veiculos {
    return new Carro(nomeVeiculo);
  }
}
