function RegisterClick() {
    var BtnRegister = document.getElementById('BtnRegister');
    BtnRegister = location.href = "cadastrologin.html"
}

function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "MEI/ferramentas.html";
    }
    else if (login == "admin2" && senha == "admin2") {
        alert('Sucesso');
        location.href = "MENTOR/consultas.html";
    }
    else {
        alert('Usuario ou senha incorretos');
    }
}

var button = document.getElementById('perfil');

button.addEventListener("click", function () {

    var info = document.getElementById('logout');

    if (info.style.display === "block") {
        info.style.display = "none"
    }
    else {
        info.style.display = "block"
    }
})

function Alerta() {
    alert("Desculpe! Está parte ainda em produção!")
}

function CursoEmpreender() {
    var CursoUm = document.getElementById('CursoUm')
    CursoUm = location.href = "../Empreendedorismo/index.html"
}

function CursoMarketing() {
    var CursoDois = document.getElementById('CursoUm')
    CursoDois = location.href = "../Marketing-Digital/index.html"
}

function CursoGestao() {
    var CursoTres = document.getElementById('CursoUm')
    CursoTres = location.href = "../Gestao-Financeira/index.html"
}

var app = {
    settings: {
        container: $('.calendar'),
        calendar: $('.front'),
        days: $('.weeks span'),
        form: $('.back'),
        input: $('.back input'),
        buttons: $('.back button')
    },

    init: function () {
        instance = this;
        settings = this.settings;
        this.bindUIActions();
    },

    swap: function (currentSide, desiredSide) {
        settings.container.toggleClass('flip');

        currentSide.fadeOut(900);
        currentSide.hide();
        desiredSide.show();

    },

    bindUIActions: function () {
        settings.days.on('click', function () {
            instance.swap(settings.calendar, settings.form);
            settings.input.focus();
        });

        settings.buttons.on('click', function () {
            instance.swap(settings.form, settings.calendar);
        });
    }
}

app.init();