/* Configuração do app (Firebase e Google Drive).
   Enquanto "apiKey" estiver vazio, o app funciona só neste aparelho (sem nuvem, sem login, sem fotos).
   Passo a passo no documento "Passo a passo: GitHub, Firebase e Google Drive". */
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDeEuUcUre37XxfwXI0bSwURsH1ku-3Znc",
    authDomain: "controle-de-manutencao-ae59d.firebaseapp.com",
    projectId: "controle-de-manutencao-ae59d",
    storageBucket: "controle-de-manutencao-ae59d.firebasestorage.app",
    messagingSenderId: "857152754436",
    appId: "1:857152754436:web:b856018084566f952ff651"
  },
  // Administradora: pode adicionar e remover usuários. Este e-mail também precisa estar nas regras (firestore.rules).
  adminEmail: "aleksonpartage@gmail.com",
  // Google Drive (fotos). Deixe clientId vazio para desligar as fotos.
  drive: {
    clientId: "857152754436-m0nvd27tlj1aj485csnc5lsb03k2n3tv.apps.googleusercontent.com",   // ID do cliente OAuth (termina com .apps.googleusercontent.com)
    apiKey: "AIzaSyBU6SUcfpjhiBiqUppSdFlk8WQyxZ6mR7Y",     // chave de API (usada só pelo seletor de pastas do Google)
    appId: "857152754436"       // número do projeto (Configurações do projeto > Geral > Número do projeto)
  },
  // Local dos dados no Firestore: "colecao/documento".
  docPath: "manutencao/quadro"
};
