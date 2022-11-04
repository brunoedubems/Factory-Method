import { Veiculos } from '../veiculos/veiculos';

export abstract class VeiculoFactory {
  // Factory Method → vai ser a subclasse q vai instanciar, PODE SER IMPLEMENTADO
  abstract getVeiculo(nomeVeiculo: string): Veiculos;

  perfil(nomeDono: string, nomeVeiculo: string): Veiculos {
    const carro = this.getVeiculo(nomeVeiculo);
    carro.perfil(nomeDono);
    return carro;
  }
}
//posso criar outros metodos de fabrica sem precisar mudar outras partes do codigo(interfaces)
