export type KontoStatus = 'aktiv' | 'inaktiv' | 'overtræk';

export interface Konto {
	id: number;
	ejerId: number;
	saldo: number;
	status: KontoStatus;
}
