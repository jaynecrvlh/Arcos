export class Cartao{
    titulo: string;
    data: Date;
    descricao: string;
    palpite: [string];
    correta: number;
    dicas: [string];
    codigo: number;
    constructor(titulo, data, descricao, palpite, correta, dicas, codigo){
        this.titulo = titulo;
        this.data = data;
        this.descricao = descricao;
        this.palpite = palpite;
        this.dicas = dicas;
        this.codigo = codigo;

    }
}