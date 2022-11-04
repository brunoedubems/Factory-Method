import { Veiculos } from './veiculos';

export class Carro implements Veiculos {
  constructor(private nome: string) {}

  perfil(nomePessoa: string): void {
    console.log(`${nomePessoa} tem o perfil de utilizar ${this.nome}. `);
  }

  parar(): void {
    console.log(`${this.nome} parou pisando no freio.`);
  }
}
