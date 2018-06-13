export class Cartao{
    titulo: string;
    data: string;
    descricao: string;
    palpite: [string];
    correta: number;
    dicas: [string];
    constructor(titulo, data, descricao, palpite, correta, dicas){
        this.titulo = titulo;
        this.data = data;
        this.descricao = descricao;
        this.palpite = palpite;
        this.dicas = dicas;
    }
}