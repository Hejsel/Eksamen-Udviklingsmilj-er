import { Bruger } from './models/bruger.mjs';
import { KontoService } from './services/konto-services.mjs';

const kontoService = new KontoService();

const bruger: Bruger = {
	id: 1,
	navn: 'Mette',
	alder: 30,
};

console.log(`Opretter bruger: ${bruger.navn}`);

const nyKonto = kontoService.opretKonto(bruger.id, 1000);
console.log(`Konto oprettet med saldo: ${nyKonto.saldo}`);

kontoService.indbetal(nyKonto.id, 500);
console.log(`Saldo efter indbetaling: ${kontoService.tjekSaldo(nyKonto.id)}`);

kontoService.hæv(nyKonto.id, 2000);
console.log(`Saldo efter overtræk: ${kontoService.tjekSaldo(nyKonto.id)}`);
