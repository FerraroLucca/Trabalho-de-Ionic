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
  pressao: string;
  temperatura: string;
  glicose: string;
  oximetria: string;
  bpm: string;
  peso: string;
  indisposicao: string;
  observacao?: string;
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

export type Medicamento = {
  idUsuario: string;
  nomeMedicamento: string;
  principioAtivo: string;
  nomeCientifico: string;
  periodoTomado: number;
  intervaloDoses: number;
  quantidadeDosesDiarias: number;
  viaAdministracao: string;
  observacoes: string;
};
