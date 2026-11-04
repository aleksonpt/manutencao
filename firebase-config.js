/* Configuração do app (Firebase e Google Drive).
   Enquanto "apiKey" estiver vazio, o app funciona só neste aparelho (sem nuvem, sem login, sem fotos).
   Passo a passo no documento "Passo a passo: GitHub, Firebase e Google Drive". */
window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Administradora: pode adicionar e remover usuários. Este e-mail também precisa estar nas regras (firestore.rules).
  adminEmail: "aleksonpartage@gmail.com",
  // Google Drive (fotos). Deixe clientId vazio para desligar as fotos.
  drive: {
    clientId: "",   // ID do cliente OAuth (termina com .apps.googleusercontent.com)
    apiKey: "",     // chave de API (usada só pelo seletor de pastas do Google)
    appId: ""       // número do projeto (Configurações do projeto > Geral > Número do projeto)
  },
  // Local dos dados no Firestore: "colecao/documento".
  docPath: "manutencao/quadro"
};
