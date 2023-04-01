
export interface Transaction {
    data: string;
    tipo: string;
    descrizione: string;
    importo: number;
    id: number;
}

export class TransactionDto {
    data: string;
    tipo: string;
    descrizione: string;
    importo: number;
    id?: number;

    constructor(data: string = "", tipo: string = "", descrizione: string = "", importo: number = 0, id: number = 0) {
        this.data = data;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.importo = importo;
        this.id = id;
    }
}