import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { Response, Usuario } from 'src/types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db = getFirestore(initializeApp(environment.firebaseConfig));
  private storage = getStorage(); 
  
  constructor() { }

  async getUsers() {
    const usersCol = collection(this.db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const userList = usersSnapshot.docs.map(doc => doc.data());
    return userList;
  }

  async cadastrarUsuario(user: Usuario) {
    try {
      
      await this.verificarDadoExistente("email", user.email);
      await this.verificarDadoExistente("cpf", user.cpf);
  
      const docRef = await addDoc(collection(this.db, 'users'), {
        foto: user.foto ?? "",
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        tipoUser: user.tipoUser,
        dataDeNacimento: user.dataDeNacimento,
        rg: user.rg,
        cpf: user.cpf,
        telefone: user.telefone,
        telefoneEmergencia: user.telefoneEmergencia,
        altura: user.altura,
        peso: user.peso,
        cep: user.endereco.cep ?? "",
        logradouro: user.endereco.logradouro,
        numero: user.endereco.numero,
        complemento: user.endereco.complemento ?? "",
        bairro: user.endereco.bairro ?? "",
        cidade: user.endereco.cidade,
        estado: user.endereco.estado
      });
  
      return this.criarResposta(200, "Cadastro realizado com sucesso", `Id Usuário: ${docRef.id}`);
      
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      return this.criarResposta(400, "Erro ao cadastrar usuário", error);
    }
  }

  async verificarDadoExistente(campo: string, dado: string){
    const q = query(collection(this.db, 'users'), where(campo, '==', dado));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      throw `${campo} ja cadastrado`
    }
  }
  
  async realizarLogin(email: string, senha: string): Promise<Response> {
    const q = query(collection(this.db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data() as Usuario; 
      
      if (userData['senha'] === senha) {
        return this.criarResposta(200, "Ok");  
      } else {
        return this.criarResposta(401, "Credenciais Inválidas");  
      }
    } else {
      return this.criarResposta(401, "Credenciais Inválidas");  
    }
  }

  async salvarURLNoFirestore(downloadURL: string) {
    try {
      await addDoc(collection(this.db, 'imagens'), {
        url: downloadURL,
        timestamp: new Date()
      });

      console.log('URL da imagem salva no Firestore com sucesso');
    } catch (error) {
      console.error('Erro ao salvar a URL no Firestore: ', error);
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
      return null;  // Retornar null em caso de erro
    }
  }  

  criarResposta(codigo: number, mensagem: string, conteudo: any = null): Response {
    return {
      codigo,
      mensagem,
      conteudo
    };
  }
}
