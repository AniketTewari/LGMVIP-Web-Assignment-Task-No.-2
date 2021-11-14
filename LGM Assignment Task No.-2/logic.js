function fetchData()
{
    fetch("https://reqres.in/api/users?page=1")
    .then(response=>{
        if(!response.ok)
        {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data.data);
        const userInfo= data.data.map(user=>{
            return `
            <div class="details1">
                <p><img id="img" src="${user.avatar}" alt="${user.first_name}"/></p>
                <p><b>Id:</b> ${user.id}</p>
                <p><b>Name:</b> ${user.first_name} ${user.last_name} </p>
                <p><b>Email:</b> ${user.email} </p>
            </div>
            `;
        }).join(" ");
        console.log(userInfo);
        // document.querySelector(".space1").insertAdjacentHTML("afterbegin", "<h1>Hello</h1>");
        document.querySelector(".space1").insertAdjacentHTML("afterbegin", userInfo);
    })
    .catch(error=>{
        console.log("Error is = "+error);
    });
}

fetchData();


//For Spinner in Button


//const btn=document.querySelector("#button1");
const btn=document.getElementById("button1");
const span=document.getElementById("span");

function fun(){
    btn.classList.toggle("button-loading");
    document.getElementById("span").style.display="none";
}

btn.addEventListener('click',fun);


//For Pre-Loader

var preloader=document.getElementById('loading');

function myFun(){
    preloader.style.display='none';
}

btn.addEventListener('click',myFun);