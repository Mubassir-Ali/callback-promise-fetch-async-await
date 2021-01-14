const posts=[
    {title: 'Post One', body:'this is post one'},
    {title: 'Post two', body:'this is post two'},

    
];



function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`
        })

        document.body.innerHTML=output;
    },1000)
}



function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error =false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: some thing went wrong');
            }
            
        },1000)
    })
}


//-------------------------promise---------------------------------------

// createPost({title: 'Post four', body:'this is post four'})
//     .then(getPost)
//     .catch(err=>console.log(err));


//----------------------Async / Await -----------------------------------------

// async function init(){
//     await createPost({title: 'Post four', body:'this is post four'})

//     getPost()
// }

// init()

//----------------------Async / Await / fetch --------------------------------

async function fetUsers(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users')

    const data =await res.json()

    console.log(data);
}

fetUsers();


//------------------------------promise.all-----------------------------------

// const promise1 = Promise.resolve('Hello world');
// const promise2 =10;
// const promise3 =new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'good by')
// });

// const promise4 =fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json())

// Promise.all([promise1,promise2,promise3,promise4]
//     )
// .then(value=>console.log(value))