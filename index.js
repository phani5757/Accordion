 function getAccordion(title, body) {
    const heading=document.createElement("div");
    heading.classList.add("accordion__head");
    heading.innerHTML = title;

    const headingContent=document.createElement("p");
    headingContent.classList.add("accordion__child");
    headingContent.innerHTML = body;

    heading.appendChild(headingContent);

    return heading;
}

function createAccordion(users){
    const accordionElement = document.getElementById('accordion');

    users.forEach(user => {
        const accordionHeading = getAccordion(user.title, user.body)
        accordionElement.appendChild(accordionHeading)
    })

    var acc = document.getElementsByClassName("accordion__head");

    for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
    }

}


 function fetchUsers() {
    // const response =  fetch("https://jsonplaceholder.typicode.com/posts").json().then(usrs => {
    //     createAccordion(usrs);
    // });;
    // // const users =  response.json().then(usrs => {
    // //     createAccordion(usrs);
    // // });

    const response =  fetch("https://jsonplaceholder.typicode.com/posts")
    response.then(res =>
        res.json()).then(d => {
            createAccordion(d)
     })
    
}
fetchUsers()



