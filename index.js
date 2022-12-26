const posts = [ 
    {title : 'post One' , body:'tjis is post One' , createdAt: new Date().getTime()},
    {title: 'Post One' , body: 'this is post two',createdAt:new Date().getTime()}
];
let intervalId = 0;
  function getPost(){
    clearInterval(intervalId);
   intervalId = setInterval(() => {
        
    
        let output = '';
        
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last update ${(new Date().getTime() - post.createdAt) /1000} seconds Ago
            </li>`;
        });
        document.body.innerHTML = output;
    },1000)
  } 
  
//  function  createPost(post){
//     setTimeout(() =>{ 
//         posts.push(post)
//     }, 2000);
//   }
// getPost();
// createPost({title :'Post three', body: 'this is post'})
// secind function didn't work because DOM is pending with 1st function then comes ASync we create callback and we call the callback in second funtion and its print the output after 2 second all the output print because javascript is wait for 2 sec then print all the output
function  createPost(post,callback){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()})
        callback();
    }, 7000);
  }
function create4thpost(post, callback){
    setTimeout(() =>{
        posts.push({...post, createdAt: new Date().getTime()})
        callback();
    }, 2000)
}
createPost({title :'Post three', body: 'this is post3'}, getPost);
create4thpost({title:'post four' , body:'this is post 4'},getPost);
