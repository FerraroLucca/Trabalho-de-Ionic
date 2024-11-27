export type Usuario = {
  id?: string;
  foto?: string;
  nome: string;
  email: string;
  senha: string;
  tipoUser: string;
  dataDeNacimento: string;
  rg: string;
  cpf: string;
  telefone: string;
  altura: number | null;
  peso: number | null;
  telefoneEmergencia: number | null;
  motivoUsoApp: number | null;
  crm: number | null;
  instituicaoFormacao: number | null;
  anoFormacao: number | null;
  especialidade: number | null;
  cep?: string;
  logradouro: string;
  numero: number;
  complemento?: string;
  bairro?: string;
  cidade: string;
  estado: string;
};

export type TipoUser = (typeof TipoUser)[keyof typeof TipoUser];
export const TipoUser = {
  PACIENTE: 'PACIENTE',
  ACOMPANHANTE: 'ACOMPANHANTE',
  MEDICO: 'MEDICO',
} as const;

type Endereco = {
  cep?: string;
  logradouro: string;
  numero: number;
  complemento?: string;
  bairro?: string;
  cidade: string;
  estado: string;
};

export type Acompanhante = {
  id?: string;
  usuario: Usuario;
};

export type Paciente = {
  id?: string;
  usuario: Usuario;
  altura: number;
  peso: number;
  telefoneEmergencia: string;
  motivoUsoApp: string;
};

export type Medico = {
  id?: string;
  usuario: Usuario;
  crm: string;
  instituicaoFormacao: string;
  anoFormacao: number;
  especialidade: string;
};

export type Medicao = {
  id?: string;
  idPaciente: string;
  pressaoSistolica: number;
  pressaoDiatolica: number;
  temperatura: number;
  glicose: number;
  oximetria: number;
  bpm: number;
  dor: boolean;
  obersavacoesDor?: string;
  indisposição: boolean;
  observacoes?: string;
  dataMedicao: Date;
};

export type RelacaoPacienteAcompanhante = {
  id?: string;
  nivelRelacionamento: string;
  idPaciente: string;
  idAcompanhante: string;
  dataRelacionamento: Date;
  status: boolean;
};

export type Response = {
  codigo: number;
  mensagem: string;
  conteudo: string;
};
