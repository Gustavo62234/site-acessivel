<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Super Choque</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        .opcoes-acessibilidade {
            display: none;
        }

        .apresenta-lista {
            display: block;
        }

        .rotacao-botao {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
        }

        body {
            font-size: 1rem;
            transition: font-size 0.3s ease;
        }
    </style>
</head>

<body>
    <header class="p-5">
        <nav class="container d-flex justify-content-between align-items-center">
            <img src="img/super-choque-logo.png" class="nav-img" loading="lazy">
            <ul class="nav mt-5">
                <li class="nav-item"><a class="nav-link" href="#inicio">Início</a></li>
                <li class="nav-item"><a class="nav-link" href="#personagem">Personagem</a></li>
                <li class="nav-item"><a class="nav-link" href="#galeria">Galeria</a></li>
                <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
            </ul>

            <!-- Acessibilidade -->
            <div id="acessibilidade" class="menu-acessibilidade">
                <button id="botao-acessibilidade" class="btn btn-primary rotacao-botao fw-bold">Acessibilidade</button>
                <div id="opcoes-acessibilidade" class="opcoes-acessibilidade">
                    <button id="aumentar-fonte" class="btn btn-primary fw-bold">A +</button>
                    <button id="diminuir-fonte" class="btn btn-primary fw-bold">A -</button>
                </div>
            </div>
        </nav>
    </header>

    <main class="container my-5">
        <!-- Seção Início -->
        <section id="inicio" class="my-5">
            <div class="inicio-fundo d-flex justify-content-between align-items-center">
                <div class="esquerda-conteudo">
                    <h1 class="display-4 text-white fst-italic fw-bold">Bem-vindo ao Mundo de</h1>
                    <img src="img/super-choque.jpg" class="mb-3" width="563" height="278" loading="lazy">
                    <a href="#personagem" class="btn btn-primary btn-lg botao-inicio fw-semibold">Conheça o Super Choque!</a>
                </div>
                <img src="img/super-choque-background.jpg" alt="Super Choque em ação" title="Super Choque - O herói da eletricidade" class="img-fluid img-inicio">
            </div>
        </section>

        <!-- Seção Personagem -->
        <section id="personagem" class="my-5 pt-6 secao-personagem">
            <div class="container d-flex align-items-center">
                <div class="col-4 d-flex justify-content-center">
                    <img src="img/virgil-hawkins.jpg" class="rounded-pill" alt="Virgil Hawkins - Super Choque" width="273" height="331" loading="lazy">
                </div>
                <div class="col-5">
                    <h2>Quem é o Super Choque?</h2>
                    <p class="p-2">Super Choque, ou Virgil Hawkins, é um super-herói da DC Comics que ganhou popularidade com sua série animada nos anos 2000. Criado por Dwayne McDuffie e John Paul Leon, ele é um adolescente com a habilidade de controlar eletricidade. Ao ser exposto a um gás mutagênico, Virgil ganha poderes elétricos, usando-os para combater o crime e ajudar sua comunidade.</p>
                </div>
            </div>
        </section>

        <!-- Seção Galeria -->
        <section id="galeria">
            <h2 class="text-center pt-5">Galeria</h2>
            <div class="container p-3 mt-3 fundo-galeria">
                <div class="row justify-content-md-center">
                    <div class="col-md-4">
                        <img src="img/super-choque-1.jpg" class="img-fluid rounded-5" loading="lazy">
                    </div>
                    <div class="col-md-4">
                        <img src="img/super-choque-2.jpg" class="img-fluid rounded-5" loading="lazy">
                    </div>
                </div>
                <div class="row mt-4 justify-content-md-center">
                    <div class="col-md-4">
                        <img src="img/super-choque-3.jpg" class="img-fluid rounded-5" loading="lazy">
                    </div>
                    <div class="col-md-4">
                        <img src="img/super-choque-4.jpg" class="img-fluid rounded-5" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção Contato -->
        <section id="contato">
            <div class="container p-5 d-flex justify-content-center">
                <div class="col-md-8 col-lg-10 rounded-5 formulario">
                    <h2 class="mb-3">Entre em contato</h2>
                    <form>
                        <div class="form-group mb-3">
                            <label for="nome">Nome</label>
                            <input type="text" id="nome" name="nome" class="form-control rounded-3 mt-1" placeholder="Digite seu nome completo">
                        </div>
                        <div class="form-group mb-3">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-control rounded-3 mt-1" placeholder="Digite seu email">
                        </div>
                        <div class="form-group mb-3">
                            <label for="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" class="form-control rounded-4 mt-2" rows="4" placeholder="Escreva sua mensagem"></textarea>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn-lg rounded-pill">Enviar mensagem</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Rodapé -->
    <footer class="text-center p-3 fst-italic">
        <p>Acesse nossas redes sociais:</p>
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
        <p class="mt-3">Desenvolvido por Start by Alura. Projeto fictício sem fins comerciais.</p>
    </footer>

    <!-- Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
            const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

            botaoDeAcessibilidade.addEventListener('click', function () {
                botaoDeAcessibilidade.classList.toggle('rotacao-botao');
                opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
            });

            const aumentaFonteBotao = document.getElementById('aumentar-fonte');
            const diminuiFonteBotao = document.getElementById('diminuir-fonte');

            let tamanhoAtualFonte = 1;

            aumentaFonteBotao.addEventListener('click', function () {
                tamanhoAtualFonte += 0.1;
                document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            });

            diminuiFonteBotao.addEventListener('click', function () {
                tamanhoAtualFonte -= 0.1;
                document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            });
        });
    </script>
</body>
</html>
