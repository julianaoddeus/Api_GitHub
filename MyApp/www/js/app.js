function BuscaInfoGit(){
   $.ajax({
       type: "GET",
       url:`https://api.github.com/users/gutoffline`,
       success: (function(user){
           console.log(user)
           let avatar = user.avatar_url
           let nome = user.nome
           let login = user.login
           let twitter = user.twitter
           let blog = user.blog    
           let github = user.github
           let instituicao = user.instituicao
           let local = user.local
           document.getElementById('resposta').innerHTML = 
           `
           <div class="col-md-5">
                <img src="{avatar}">
           </div>
           `
           

       })
   })
   
       
    
}



document.getElementById('btn-buscar').addEventListener('click', function(){
    BuscaInfoGit();
})