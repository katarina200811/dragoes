
// =============================
// ELEMENTOS
// =============================

const pesquisa = document.getElementById("pesquisa");

const criaturas = document.querySelectorAll(".criatura");

const filtros = document.querySelectorAll(".filtro");

let categoriaAtual = "todos";


// =============================
// FILTRAR CRIATURAS
// =============================

function filtrarCriaturas() {

    const texto =
        pesquisa.value.toLowerCase();

    criaturas.forEach(function (criatura) {

        const nome =
            criatura
                .querySelector("h3")
                .textContent
                .toLowerCase();

        const tipo =
            criatura
                .querySelector(".tipo")
                .textContent
                .toLowerCase();

        const categoria =
            criatura.dataset.tipo;


        const correspondePesquisa =
            nome.includes(texto) ||
            tipo.includes(texto);


        const correspondeCategoria =
            categoriaAtual === "todos" ||
            categoria === categoriaAtual;


        if (
            correspondePesquisa &&
            correspondeCategoria
        ) {

            criatura.style.display = "block";

        } else {

            criatura.style.display = "none";

        }

    });

}


// =============================
// PESQUISA
// =============================

pesquisa.addEventListener(
    "input",
    filtrarCriaturas
);


// =============================
// FILTROS
// =============================

filtros.forEach(function (filtro) {

    filtro.addEventListener(
        "click",
        function () {

            filtros.forEach(function (botao) {

                botao.classList.remove("ativo");

            });


            filtro.classList.add("ativo");


            categoriaAtual =
                filtro.dataset.tipo;


            filtrarCriaturas();

        }
    );

});


// =============================
// MODAL
// =============================

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fecharModal");

const modalNome =
    document.getElementById("modalNome");

const modalTipo =
    document.getElementById("modalTipo");

const modalDescricao =
    document.getElementById("modalDescricao");

const modalHabitat =
    document.getElementById("modalHabitat");

const modalPoder =
    document.getElementById("modalPoder");


// =============================
// ABRIR DETALHES
// =============================

const botoes =
    document.querySelectorAll(".btn-detalhes");


botoes.forEach(function (botao) {

    botao.addEventListener(
        "click",
        function () {

            modalNome.textContent =
                botao.dataset.nome;

            modalTipo.textContent =
                botao.dataset.tipo;

            modalDescricao.textContent =
                botao.dataset.descricao;

            modalHabitat.textContent =
                botao.dataset.habitat;

            modalPoder.textContent =
                botao.dataset.poder;


            modal.classList.add("ativo");

        }
    );

});


// =============================
// FECHAR MODAL
// =============================

fecharModal.addEventListener(
    "click",
    function () {

        modal.classList.remove("ativo");

    }
);


// Clicar fora

modal.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modal) {

            modal.classList.remove("ativo");

        }

    }
);


// Tecla ESC

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            modal.classList.remove("ativo");

        }

    }
);

