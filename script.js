while (true){
    var usuario = prompt("Digite seu usuário")
    var senha = parseInt(prompt("Digite a sua senha"))


if (usuario == 'senai' || usuario == 'sesi' || usuario == 'escola' && senha === 2025999) {
    window.location.href="pagina.html"
    break
} else {
    alert("Usuário ou senha incorretos! Tente novamente")
}
}