export type Usuario = {
    id?: number,
    foto?: string,
    nome: string,
    email: string,
    senha: string,
    tipoUser: "PACIENTE" | "ACOMPANHANTE" | "ADMINISTRADOR"
    dataDeNacimento: string,
    rg: string,
    cpf: string,
    telefone: string,
    telefoneEmergencia?: string,
    altura: string,
    peso: string
    endereco: Endereco
}

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