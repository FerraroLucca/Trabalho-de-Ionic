export type Usuario = {
    id?: number,
    foto?: string,
    nome: string,
    email: string,
    senha: string,
    tipoUser: TipoUser,
    dataDeNascimento: string,
    rg?: string,
    cpf: string,
    telefone: string,
    telefoneEmergencia?: string,
    altura?: string,
    peso?: string
    endereco?: Endereco
}

export type TipoUser = typeof TipoUser[keyof typeof TipoUser];
export const TipoUser = {
    PACIENTE: 'PACIENTE',
    ACOMPANHANTE: 'ACOMPANHANTE', 
    ADMINISTRADOR: 'ADMINISTRADOR'
} as const;

type Endereco = {
    cep?: string,
    logradouro: string,
    numero: number,
    complemento?: string,
    bairro?: string,
    cidade: string,
    estado: string
}

export type Medicoes = {
    id?: number,
    data: Date,
    pressaoSistolica: number,
    pressaoDiatolica: number,
    temperatura: number, 
    glicose: number, 
    oximetria: number,
    bpm: number,
    dor: boolean,
    obersavacoesDor?: string, 
    indisposição: boolean,
    observacoes?: string
}

export type RelacaoPacienteAcompanhante = {
    id?: number,
    parentesco: string,
    idPaciente ?: number,
    idAcompanhante: number,
    dataRelacionamente: Date,
    status: boolean
}

export type Response = {
    codigo: number,
    mensagem: string,
    conteudo: string
}