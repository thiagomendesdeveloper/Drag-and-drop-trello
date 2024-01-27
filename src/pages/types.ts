export interface taskCardProps{
    status: string;
    id: number;
    tag: string;
    descricao: string;
    responsavel: string;
    upload?: any;
}

export interface column{
    id: number;
    title: string;
    color: string;
    cards: taskCardProps[]
}