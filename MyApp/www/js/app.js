function BuscaInfoGit(){
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/suellen5",
         success: (function(user){
             console.log(user)
             let avatar = user.avatar_url
             let nome = user.name
             let login = user.login             
             let twitter = user.twitter_username
             let blog = user.blog
             let github = user.url        
             let instuicao = user.company
             let local = user.local
             document.getElementById("resposta").innerHTML = 
             `<div class="col-md-5">
                <img src="${avatar}" width="150"></div> 
             <div class="col-md-7"> 
             ${nome} (${login}) <br> 
             <a href="${twitter}"><i class="bi bi-twitter"></i></a> 
             <a href="${blog}"><i class="bi bi-github" width="100"></i></a> 
             <a href="${github}"><i class="bi bi-medium"></i></a> <br> 
             ${instuicao} - ${local}`
        })
    })
   
       
    
}



document.getElementById('btn-buscar').addEventListener('click', function(){
    BuscaInfoGit();
})