# Projeto de Monitoramento de Pacientes

Este projeto tem como objetivo auxiliar o monitoramento de pacientes com funcionalidades como registro diário de dados, controle de medicamentos e localização em tempo real, sendo especialmente útil para pacientes com necessidades especiais como Alzheimer.

## Funcionalidades Principais
Login e Cadastro

O professor deve iniciar criando um novo cadastro.
Após o cadastro, será direcionado automaticamente para a página de medição diária.
Medição Diária

Registro de dados diários do paciente, como sinais vitais e outras informações relevantes.
Menu de Funcionalidades

**Cadastro de Medicamentos:** Adicione os medicamentos que o paciente está tomando.

**Listagem de Medicamentos:** Visualize todos os medicamentos cadastrados.

**Mapa em Tempo Real:** Acompanhe a localização do paciente para situações de emergência.

**Acessos Personalizados**
Usuários diferentes possuem acessos e permissões específicos:
Médicos: Podem visualizar e gerenciar dados de vários pacientes.
Pacientes: Podem registrar suas informações e consultar suas próprias medições.
Acompanhantes: Podem monitorar informações específicas e localização do paciente.


## **Passo a Passo para Utilização**

Login

Acesse a aplicação e clique em Criar Conta.
Insira as informações solicitadas para criar o perfil.
Medição Diária

Após o login, registre os dados diários do paciente na página inicial.
Cadastro e Listagem de Medicamentos

No menu lateral, escolha Cadastro de Medicamentos para adicionar um novo medicamento.
Para visualizar, clique em Listar Medicamentos.
Mapa em Tempo Real

Acesse o Mapa pelo menu lateral para visualizar a localização em tempo real do paciente.
Gerenciamento por Permissões

Explore a aplicação com diferentes tipos de usuários para testar as funcionalidades e permissões específicas.

## Requisitos
Ambiente de desenvolvimento:

Node.js (versão mínima recomendada: 14.x)
Ionic CLI
Firebase configurado com as credenciais do projeto.

##Instalação das dependências:
npm install

## Rodando a aplicação
ionic serve

## Banco de Dados
Este projeto utiliza Firebase para autenticação e armazenamento de dados.
Certifique-se de que o banco de dados Firebase esteja configurado conforme as instruções no arquivo firebaseConfig.js.
