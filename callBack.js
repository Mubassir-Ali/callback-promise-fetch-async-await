const posts=[
    {title: 'Post One', body:'this is post one'},
    {title: 'Post two', body:'this is post two'},

    {title: 'Post four', body:'this is post four'}
];



function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`
        })

        document.body.innerHTML=output;
    },2000)
}



function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback()
    },1000)

}


createPost({title: 'Post three', body:'this is post three'},getPost);