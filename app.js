// =============================================================
// ARQUIVO app.js PARA FIREBASE
// =============================================================

// 1. Cole aqui o objeto de configuração que você copiou do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA09An1gwJ2oH6MhP7Kp6f0ztfO9k-c4Bo",
  authDomain: "loginb-da6a6.firebaseapp.com",
  projectId: "loginb-da6a6",
  storageBucket: "loginb-da6a6.firebasestorage.app",
  messagingSenderId: "1035812030471",
  appId: "1:1035812030471:web:b0c6dff84d95994fc282a2"
};


// 2. Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// 3. Cria uma referência para o serviço de autenticação
const auth = firebase.auth();


// --- Lógica de Cadastro ---
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        // Função de cadastro do Firebase
        auth.createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Cadastro bem-sucedido
                alert("Usuário cadastrado com sucesso! Faça o login.");
                window.location.href = "index.html"; // Redireciona para o login
            })
            .catch((error) => {
                // Trata os erros
                alert("Erro ao cadastrar: " + error.message);
                console.error("Erro de cadastro:", error);
            });
    });
}


// --- Lógica de Login ---
const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        // Função de login do Firebase
        auth.signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                alert("Login realizado com sucesso! Bem-vindo, " + user.email);

                // DESAFIO: Criar um 'dashboard.html' e redirecionar para ele
                // window.location.href = "dashboard.html"; 
                console.log("Usuário logado:", user);
            })
            .catch((error) => {
                // Trata os erros (senha errada, usuário não encontrado)
                alert("Erro ao logar: Por favor, verifique seu e-mail e senha.");
                console.error("Erro de login:", error.message);
            });
    });
}