import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
  Acompanhante,
  Medicao,
  Medico,
  Paciente,
  Response,
  TipoUser,
  Usuario,
  Medicamento,
} from 'src/@types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  saveUsuario(usuario: Usuario) {
    throw new Error('Method not implemented.');
  }
  private db = getFirestore(initializeApp(environment.firebaseConfig));
  private storage = getStorage();
  private collectionUsuarios = 'user';
  private collectionMedicoes = 'medicoes';
  private collectionAcompanhamento = 'acompanhamento';
  private collectionMedicamento = 'medicacao';

  constructor() {}

  async getUsers() {
    const usersCol = collection(this.db, this.collectionUsuarios);
    const usersSnapshot = await getDocs(usersCol);
    const userList = usersSnapshot.docs.map((doc) => doc.data());
    return userList;
  }

  async cadastrarUsuario(usuario: Usuario) {
    try {
      this.validarCPF(usuario.cpf);
      await this.verificarDadoExistente('email', usuario.email);
      await this.verificarDadoExistente('cpf', usuario.cpf);
      await this.verificarDadoExistente('rg', usuario.rg);

      const docRef = await addDoc(
        collection(this.db, this.collectionUsuarios),
        {
          foto: usuario.foto ?? '',
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
          tipoUser: usuario.tipoUser,
          dataDeNacimento: usuario.dataDeNacimento,
          rg: usuario.rg,
          cpf: usuario.cpf,
          telefone: usuario.telefone,
          cep: usuario.cep ?? '',
          logradouro: usuario.logradouro,
          numero: usuario.numero,
          complemento: usuario.complemento ?? '',
          bairro: usuario.bairro ?? '',
          cidade: usuario.cidade,
          estado: usuario.estado,
          altura: usuario.altura ?? '',
          peso: usuario.peso ?? '',
          telefoneEmergencia: usuario.telefoneEmergencia ?? '',
          motivoUsoApp: usuario.motivoUsoApp ?? '',
          crm: usuario.crm ?? '',
          instituicaoFormacao: usuario.instituicaoFormacao ?? '',
          anoFormacao: usuario.anoFormacao ?? '',
          especialidade: usuario.especialidade ?? '',
        }
      );

      return this.criarResposta(
        200,
        'Cadastro de usuário realizado com sucesso',
        `Id Paciente: ${docRef.id}`
      );
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return this.criarResposta(400, 'Erro ao cadastrar usuário', error);
    }
  }

  // async cadastrarPaciente(paciente: Paciente) {
  //   try {
  //     this.validarCPF(paciente.usuario.cpf);
  //     await this.verificarDadoExistente('email', paciente.usuario.email);
  //     await this.verificarDadoExistente('cpf', paciente.usuario.cpf);
  //     await this.verificarDadoExistente('rg', paciente.usuario.rg);

  //     const docRef = await addDoc(
  //       collection(this.db, this.collectionUsuarios),
  //       {
  //         foto: paciente.usuario.foto ?? '',
  //         nome: paciente.usuario.nome,
  //         email: paciente.usuario.email,
  //         senha: paciente.usuario.senha,
  //         tipoUser: TipoUser.PACIENTE,
  //         dataDeNacimento: paciente.usuario.dataDeNacimento,
  //         rg: paciente.usuario.rg,
  //         cpf: paciente.usuario.cpf,
  //         telefone: paciente.usuario.telefone,
  //         cep: paciente.usuario.endereco.cep ?? '',
  //         logradouro: paciente.usuario.endereco.logradouro,
  //         numero: paciente.usuario.endereco.numero,
  //         complemento: paciente.usuario.endereco.complemento ?? '',
  //         bairro: paciente.usuario.endereco.bairro ?? '',
  //         cidade: paciente.usuario.endereco.cidade,
  //         estado: paciente.usuario.endereco.estado,
  //         altura: paciente.altura,
  //         peso: paciente.peso,
  //         telefoneEmergencia: paciente.telefoneEmergencia,
  //         motivoUsoApp: paciente.motivoUsoApp,
  //       }
  //     );

  //     return this.criarResposta(
  //       200,
  //       'Cadastro de paciente realizado com sucesso',
  //       `Id Paciente: ${docRef.id}`
  //     );
  //   } catch (error) {
  //     console.error('Erro ao cadastrar usuário:', error);
  //     return this.criarResposta(400, 'Erro ao cadastrar usuário', error);
  //   }
  // }

  // async cadastrarAcompanhante(acompanhante: Acompanhante) {
  //   try {
  //     this.validarCPF(acompanhante.usuario.cpf);
  //     await this.verificarDadoExistente('email', acompanhante.usuario.email);
  //     await this.verificarDadoExistente('cpf', acompanhante.usuario.cpf);
  //     await this.verificarDadoExistente('rg', acompanhante.usuario.rg);

  //     const docRef = await addDoc(
  //       collection(this.db, this.collectionUsuarios),
  //       {
  //         foto: acompanhante.usuario.foto ?? '',
  //         nome: acompanhante.usuario.nome,
  //         email: acompanhante.usuario.email,
  //         senha: acompanhante.usuario.senha,
  //         tipoUser: TipoUser.ACOMPANHANTE,
  //         dataDeNacimento: acompanhante.usuario.dataDeNacimento,
  //         rg: acompanhante.usuario.rg,
  //         cpf: acompanhante.usuario.cpf,
  //         telefone: acompanhante.usuario.telefone,
  //         cep: acompanhante.usuario.endereco.cep ?? '',
  //         logradouro: acompanhante.usuario.endereco.logradouro,
  //         numero: acompanhante.usuario.endereco.numero,
  //         complemento: acompanhante.usuario.endereco.complemento ?? '',
  //         bairro: acompanhante.usuario.endereco.bairro ?? '',
  //         cidade: acompanhante.usuario.endereco.cidade,
  //         estado: acompanhante.usuario.endereco.estado,
  //       }
  //     );

  //     return this.criarResposta(
  //       200,
  //       'Cadastro de acompanhante realizado com sucesso',
  //       `Id Acompanhante: ${docRef.id}`
  //     );
  //   } catch (error) {
  //     console.error('Erro ao cadastrar usuário:', error);
  //     return this.criarResposta(400, 'Erro ao cadastrar usuário', error);
  //   }
  // }

  // async cadastrarMedico(medico: Medico) {
  //   try {
  //     this.validarCPF(medico.usuario.cpf);
  //     await this.verificarDadoExistente('cpf', medico.usuario.cpf);
  //     await this.verificarDadoExistente('rg', medico.usuario.rg);
  //     await this.verificarDadoExistente('email', medico.usuario.email);
  //     await this.verificarDadoExistente('crm', medico.crm);

  //     const docRef = await addDoc(
  //       collection(this.db, this.collectionUsuarios),
  //       {
  //         foto: medico.usuario.foto ?? '',
  //         nome: medico.usuario.nome,
  //         email: medico.usuario.email,
  //         senha: medico.usuario.senha,
  //         tipoUser: TipoUser.MEDICO,
  //         dataDeNacimento: medico.usuario.dataDeNacimento,
  //         rg: medico.usuario.rg,
  //         cpf: medico.usuario.cpf,
  //         telefone: medico.usuario.telefone,
  //         cep: medico.usuario.endereco.cep ?? '',
  //         logradouro: medico.usuario.endereco.logradouro,
  //         numero: medico.usuario.endereco.numero,
  //         complemento: medico.usuario.endereco.complemento ?? '',
  //         bairro: medico.usuario.endereco.bairro ?? '',
  //         cidade: medico.usuario.endereco.cidade,
  //         estado: medico.usuario.endereco.estado,
  //         crm: medico.crm,
  //         instituicaoFormacao: medico.anoFormacao,
  //         anoFormacao: medico.anoFormacao,
  //         especialidade: medico.especialidade,
  //       }
  //     );

  //     return this.criarResposta(
  //       200,
  //       'Cadastro de medico realizado com sucesso',
  //       `Id Medico: ${docRef.id}`
  //     );
  //   } catch (error) {
  //     console.error('Erro ao cadastrar usuário:', error);
  //     return this.criarResposta(400, 'Erro ao cadastrar usuário', error);
  //   }
  // }

  async cadastrarMedicao(medicao: Medicao) {
    try {
      const docRef = await addDoc(
        collection(this.db, this.collectionMedicoes),
        {
          idPaciente: medicao.idPaciente,
          pressaoSistolica: medicao.pressao,
          temperatura: medicao.temperatura,
          glicose: medicao.glicose,
          oximetria: medicao.oximetria,
          bpm: medicao.bpm,
          indisposicao: medicao.indisposicao,
          observacoes: medicao.observacao ?? '',
          dataMedicao: medicao.dataMedicao,
        }
      );
      return this.criarResposta(200, 'Medição armazenada com sucesso');
    } catch (error) {
      console.error('Erro ao cadastrar medição:', error);
      return this.criarResposta(400, 'Erro ao cadastrar medição', error);
    }
  }

  async verificarDadoExistente(campo: string, dado: string) {
    const q = query(
      collection(this.db, this.collectionUsuarios),
      where(campo, '==', dado)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      throw `${campo} ja cadastrado`;
    }
  }

  validarCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      throw 'CPF Inválido';
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * (10 - i);
    }
    let primeiroDigito = (soma * 10) % 11;
    if (primeiroDigito === 10 || primeiroDigito === 11) {
      primeiroDigito = 0;
    }
    if (primeiroDigito !== parseInt(cpf[9])) {
      throw 'CPF Inválido';
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf[i]) * (11 - i);
    }
    let segundoDigito = (soma * 10) % 11;
    if (segundoDigito === 10 || segundoDigito === 11) {
      segundoDigito = 0;
    }
    if (segundoDigito !== parseInt(cpf[10])) {
      throw 'CPF Inválido';
    }
  }

  async adicionarAcompanhante(
    idPaciente: string,
    cpf: string,
    nivelRelacionamento: string
  ) {
    this.validarCPF(cpf);
    var idAcompanhante;
    try {
      try {
        idAcompanhante = (
          await this.getUser<Acompanhante>(TipoUser.ACOMPANHANTE, 'cpf', cpf)
        ).id;
      } catch (error) {
        return this.criarResposta(400, 'Usuário não encontrado', error);
      }
      const docRef = await addDoc(
        collection(this.db, this.collectionAcompanhamento),
        {
          nivelRelacionamento: nivelRelacionamento,
          idPaciente: idPaciente,
          idAcompanhante: idAcompanhante,
          dataRelacionamento: new Date(),
          status: true,
        }
      );
      return this.criarResposta(200, 'Acompanhante adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return this.criarResposta(400, 'Erro ao cadastrar usuário', error);
    }
  }

  async adicionarAcompanhamentoMedico(idPaciente: string, crm: string) {
    var idMedico;
    try {
      try {
        idMedico = (await this.getUser<Medico>(TipoUser.MEDICO, 'crm', crm)).id;
      } catch (error) {
        return this.criarResposta(400, 'Usuário não encontrado', error);
      }
      const docRef = await addDoc(
        collection(this.db, this.collectionAcompanhamento),
        {
          nivelRelacionamento: 'MEDICO',
          idPaciente: idPaciente,
          idAcompanhante: idMedico,
          dataRelacionamento: new Date(),
          status: true,
        }
      );
      return this.criarResposta(200, 'Acompanhante adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return this.criarResposta(400, 'Erro ao cadastrar usuário', error);
    }
  }

  async getUser<T>(
    tipoUsuario: TipoUser,
    campo: string,
    dado: string
  ): Promise<T> {
    const q = query(
      collection(this.db, this.collectionUsuarios),
      where(campo, '==', dado),
      where('tipoUser', '==', tipoUsuario)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      throw new Error('Usuário não encontrado');
    }
    const doc = querySnapshot.docs[0];
    const data = doc.data() as T;
    return { id: doc.id, ...data };
  }

  async realizarLogin(email: string, senha: string): Promise<Response> {
    console.log(email, senha);
    const q = query(
      collection(this.db, this.collectionUsuarios),
      where('email', '==', email)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      var userData = userDoc.data() as Usuario;
      userData = { id: userDoc.id, ...userData };

      if (userData['senha'] === senha) {
        return this.criarResposta(200, 'Ok', userData);
      } else {
        console.log(senha);
        return this.criarResposta(401, 'Credenciais Inválidas');
      }
    } else {
      console.log(email);
      return this.criarResposta(401, 'Credenciais Inválidas');
    }
  }

  async uploadImageStorage(selectedFile: File): Promise<string | null> {
    const storageRef = ref(this.storage, `images/${selectedFile.name}`);

    try {
      const snapshot = await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem: ', error);
      return null;
    }
  }

  criarResposta(
    codigo: number,
    mensagem: string,
    conteudo: any = null
  ): Response {
    return {
      codigo,
      mensagem,
      conteudo,
    };
  }

  async cadastrarMedicamento(medicamento: Medicamento) {
    try {
      const docRef = await addDoc(
        collection(this.db, this.collectionMedicamento),
        {
          idUsuario: medicamento.idUsuario,
          nomeMedicamento: medicamento.nomeMedicamento,
          principioAtivo: medicamento.principioAtivo,
          nomeCientifico: medicamento.nomeCientifico,
          periodoTomado: medicamento.periodoTomado,
          intervaloDoses: medicamento.intervaloDoses,
          quantidadeDosesDiarias: medicamento.quantidadeDosesDiarias,
          viaAdministracao: medicamento.viaAdministracao,
          observacoes: medicamento.observacoes,
        }
      );

      return this.criarResposta(
        200,
        'Cadastro do medicamento realizado com sucesso',
        `Id Medicamento: ${docRef.id}`
      );
    } catch (error) {
      console.error('Erro ao cadastrar medicamento:', error);
      return this.criarResposta(400, 'Erro ao cadastrar medicamento', error);
    }
  }

  async buscarMedicamentosUsuario(idUsuario: string): Promise<any> {
    try {
      const q = query(
        collection(this.db, this.collectionMedicamento),
        where('idUsuario', '==', idUsuario)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const medicamentos: Medicamento[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Medicamento),
        }));

        console.log('id da firebase', idUsuario);
        return this.criarResposta(
          200,
          'Busca realizada com sucesso',
          medicamentos
        );
      } else {
        return this.criarResposta(404, 'Nenhum medicamento encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar medicamentos:', error);
      return this.criarResposta(400, 'Erro ao buscar medicamentos', error);
    }
  }
}
