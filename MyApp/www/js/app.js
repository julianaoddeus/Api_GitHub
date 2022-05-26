let lista = ["gutoffline", "SantiagoVinicius", "julianaoddeus", "marceloVinicius12", "MoreiraJulia", "suellen05", "Marciocarneiro77", "Taynaradb", "Gerisbr"];

let element = lista[Math.floor(Math.random() * lista.length)];
function BuscaInfoGit() {
    $.ajax({
        type: "GET",
        url: `https://api.github.com/users/${element}`,
        success: (function (user) {          
            let avatar = user.avatar_url
            let nome = user.name
            let login = user.login
            let twitter = user.twitter
            let blog = user.blog
            let github = user.url
            let instuicao = user.
            let local = user.local
            document.getElementById("resposta").innerHTML =
                `<div class="row">
                    <div class="col-md-6">
                        <img src="${avatar}" width="150"></div> 
                    <div class="col-md-6 flex-column"> 
                        ${nome} (${login}) <br> 
                        <a href="${twitter}">twitter</a> </br>
                        <a href="${blog}">medium-blog</a> </br>
                        <a href="${github}">github</a></br> 
                        ${instuicao} - ${local}
                    </div>                    
                </div>`
             
        })
    })



}



document.getElementById('btn-buscar').addEventListener('click', function () {
    BuscaInfoGit();
})