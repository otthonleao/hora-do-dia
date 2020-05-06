function carregar () {
    
    var msg = document.getElementById('msg'); //Pegando a mensagem para manipular pelo JS
    var img = document.getElementById('imagem'); //Pegando a imagem para manipulação
    var data = new Date();
      //Definição dos dias da semana
    var dayWeek = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado-Feira')[data.getDay()];
    // Dia do mês 
    var day = data.getDate();
    // nome do mês
    var month = new Array ('janeiro', 'fevereiro', 'março', 'abril','maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro')[data.getMonth()];
    // ano em 4 dígitos {Para 2 dígitos: data.getYear()}
    var year4 = data.getFullYear();
    //Definição de horas, minutos e segundos
    var hh = data.getHours();
    var mm = data.getMinutes();
    var ss = data.getSeconds();
    var horaNow = hh + 'h' + mm + 'min';
    // var horaNow = 14
    // Condição para o ajuste de hora automático
    //Bom Dia 
    if(horaNow >=0 && horaNow < 12) {
        msg.innerHTML = `Bom Dia!<br>Hoje é ${dayWeek}, ${day} de ${month} de ${year4}<br>Agora são ${horaNow}`;
        img.src="img/manha.png";
        document.body.style.background = '#87CEEB'
    //Boa Tarde    
    } else if (horaNow >= 12 && horaNow < 18) {
        msg.innerHTML = `Boa Tarde!<br>Hoje é ${dayWeek}, ${day} de ${month} de ${year4}<br>Agora são ${horaNow}`;
        img.src="img/tarde.png";
        document.body.style.background = '#FFD700'
    //Boa Noite
        } else {
            msg.innerHTML = `Boa Noite!<br>Hoje é ${dayWeek}, ${day} de ${month} de ${year4}<br>Agora são ${horaNow}`;
            img.src="img/noite.png";
            document.body.style.background = '#808080';
        }
}

function entraMouse() {
    var entra = document.getElementById('imagem');
    entra.style.opacity = '80%';
}

function saiMouse() {
    var sai = document.getElementById('imagem');
    sai.style.opacity = '100%';
}
