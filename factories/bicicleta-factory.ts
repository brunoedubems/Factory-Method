import { VeiculoFactory } from './veiculo-factory';
import { Veiculos } from '../veiculos/veiculos';
import { Bicicleta } from '../veiculos/bicicleta';

export class BicicletaFactory extends VeiculoFactory {
  getVeiculo(nomeVeiculo: string): Veiculos {
    return new Bicicleta(nomeVeiculo);
  }
}
