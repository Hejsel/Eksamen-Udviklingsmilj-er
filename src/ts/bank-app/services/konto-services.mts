import { Konto } from '../models/konto.mjs';

export class KontoService {
	private konti: Konto[] = [];

	opretKonto(ejerId: number, startSaldo: number): Konto {
		const nyKonto: Konto = {
			id: this.konti.length + 1,
			ejerId,
			saldo: startSaldo,
			status: 'aktiv',
		};
		this.konti.push(nyKonto);
		return nyKonto;
	}

	indbetal(kontoId: number, beløb: number): void {
		const konto = this.findKonto(kontoId);
		if (konto) konto.saldo += beløb;
	}

	hæv(kontoId: number, beløb: number): void {
		const konto = this.findKonto(kontoId);
		if (konto) {
			konto.saldo -= beløb;
			if (konto.saldo < 0) konto.status = 'overtræk';
		}
	}

	findKonto(kontoId: number): Konto | undefined {
		return this.konti.find((k) => k.id === kontoId);
	}

	tjekSaldo(kontoId: number): number | undefined {
		const konto = this.findKonto(kontoId);
		return konto?.saldo;
	}
}
