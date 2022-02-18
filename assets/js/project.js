AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [{
        title: "Github Api",
        cardImage: "assets/images/project-page/gitapi.png",
        description: "Github-API is a web application whereby one can search for users github account and get to see the users details, search for their respositories and see the repository details.",
        Previewlink: "https://jobkarani.github.io/Github-API/home",
        Githublink: "https://github.com/jobkarani/Github-API",
    },
    {
        title: "Awards",
        cardImage: "assets/images/project-page/awards.png",
        description: "Awards is an application whereby one is able to create an account, post a project for rating and also be able to rate other users' posted projects.",
        Previewlink: "https://jkawwards.herokuapp.com/",
        Githublink: "https://github.com/jobkarani/Awards",
    },
    {
        title: "Neighbourhood",
        cardImage: "assets/images/project-page/hood.png",
        description: "You can do a research on the best neighbourhood to join and get to know whether your business will thrive there.You can also see businesses in that neighbourhood and posts made in the neighbourhood. You can also create your own neighbourhood and posts.",
        Previewlink: "https://nhooddd.herokuapp.com/",
        Githublink: "https://github.com/jobkarani/neighborhood",
    },
    {
        title: "Instagam Clone",
        cardImage: "assets/images/project-page/ig.png",
        description: "InstaClone is webapp where a user can be able to create an account,post their own photos, view other users photos and get to like and comment on them.",
        Previewlink: "https://instaclonnee.herokuapp.com/",
        Githublink: "https://github.com/jobkarani/InstaClone",
    },
    {
        title: "Gallery",
        cardImage: "assets/images/project-page/gallery.png",
        description: "Gallery is a simple image gallery web app to showcase scenic pictures. Users get to view photos updated by the site admin. Users can see photos based on the location, by clicking on the listed locations in the menu. The search function will search photos based on the categories.",
        Previewlink: "https://ayubb254.herokuapp.com/",
        Githublink: "https://github.com/jobkarani/galleryy",
    },
    {
        title: "JK-Blogs",
        cardImage: "assets/images/project-page/jkblogs.png",
        description: "This is a blogging website whereby a user can view blog posts, create their own accounts and post their own blog posts. It also displays some random inspirational quotes on the landing page.",
        Previewlink: "https://jkblogs.herokuapp.com/",
        Githublink: "https://github.com/jobkarani/Jk-Blogs",
    },

];

// function for rendering project cards data
const showCards = () => {
    let output = "";
    projects.forEach(({ title, cardImage, tags, Previewlink, Githublink }) => {
        output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
    });
    projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
    // Declare variables
    var input, button, i, skillcard, card, title;
    input = document.getElementById("myInput").value;
    input = input.toUpperCase();
    skillcard = document.getElementsByClassName("skill-card");
    card = document.getElementsByClassName("card");
    title = document.getElementsByClassName("title");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        if (
            button[i].innerHTML.toUpperCase().includes(input) ||
            title[i].innerHTML.toUpperCase().includes(input)
        ) {
            skillcard[i].style.display = "";
            card[i].style.display = "";
        } else {
            skillcard[i].style.display = "none";
            card[i].style.display = "none";
        }
    }
}