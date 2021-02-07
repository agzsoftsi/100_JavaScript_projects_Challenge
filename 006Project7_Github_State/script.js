const form = document.getElementById("githubForm");

form.addEventListener("submit", function(e){
    
    let search = document.getElementById("search").value;
    let originalName =  search.split(' ').join('');
    //let reposName = [];
   // alert(originalName);
    let languages = [];

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        document.getElementById("avatarUser").innerHTML=`<img src="${data.avatar_url}" width="250px" height="250px" alt="Avatar User" class="avatarUser">`
        document.getElementById("nameUser").innerHTML=`${data.name}`
        document.getElementById("roleUser").innerHTML=`${data.bio}`
        document.getElementById("location").innerHTML=`${data.location}`
        document.getElementById("github").innerHTML=`${data.login}`
        document.getElementById("mail").innerHTML=`${data.mail}`
        document.getElementById("twitter").innerHTML=`@${data.twitter_username}`
        document.getElementById("blog").innerHTML=`${data.blog}`
        document.getElementById("followers").innerHTML=`${data.followers}`
        document.getElementById("following").innerHTML=`${data.following}`
        document.getElementById("repos").innerHTML=`${data.public_repos}`
        
    });

    fetch("https://api.github.com/users/"+originalName+"/repos")
    .then((result) => result.json())
    .then((data) => {
       /* for(let i=0; i < data.length;i++ ){
            reposName.push(data[i].name);
        }

        console.log(reposName)*/

        for(let i=0; i < data.length;i++ ){
           
            fetch("https://api.github.com/repos/"+originalName+"/"+data[i].name+"/languages")
            .then((result) => result.json())
            .then((data) => {
                console.log(data)

                
        
            });
        }


            
    

    });

    

    

    e.preventDefault();
});