console.log("before")
const user  = getUser(1);
console.log(user);
getUserWithCallback(1,(user) => {
    console.log("user" ,user);
    getRepositories(user.gitUsername, repos => {
        console.log("repos",repos);
    });
});
console.log("after")

function getUser(id){
    setTimeout(() => {
        console.log("geting the user value from db");
        return { id:id, gitUsername:"rg"}
    },2000 );

    return 1;
}

// CALLBACK EXAMPLE
function getUserWithCallback(id,callback){
    setTimeout(() => {
        console.log("geting the user value from db");
        callback({ id:id, gitUsername:"rg"});
    },2000 );

    return 1;
}

function getRepositories(username,callback){
    setTimeout(() => {
        callback(["repo1","repo2","repo3"]);
    },2000); 
}