AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Brand Ambassador",
        cardImage: "assets/images/experience-page/treasure.png",
        place: "Treasure Communications Ltd",
        time: "(April-July 2021)",
        desp: "<li>Acted as a brand ambassador for Cool Baby Daipers in Nairobi within the CBD.</li>",
    },
    {
        title: "Software and Hardware Intern",
        cardImage: "assets/images/experience-page/cways.png",
        place: "ComputerWays Ltd",
        time: "(Jan, 2020 - March 2020)",
        desp: "<li>Specialized in maintenance of Office Automation Equipment, ICT Equipment,Software Installation,Networking and Repairing Computer Peripherals and Accessories.</li>",
    },
    {
        title: "Enumerator",
        cardImage: "assets/images/experience-page/knbs.png",
        place: "Kenya National Bureau of Statistics",
        time: "(August 2019)",
        desp: "<li>Conducted the census enumeration exercise in my home area.</li>",
    },
    {
        title: "Brand Ambassador",
        cardImage: "assets/images/experience-page/hallmark.png",
        place: "Hallmark Advertising and Marketing ltd.",
        time: "(March – August 2018)",
        desp: "<li>Acted as a brand ambassador for FRESHA milk products and helped in pushing the products in Mombasa, Kisumu and Kisii.</li>",
    },
];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);