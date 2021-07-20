import "./styles.css";
import React from "react";
import { useState } from "react";

const continentsList = {
  America: [
    {
      name: "New York City",
      content:
        "More than 50 million people visit New York City every year. The five boroughs -- or regions -- of New York have some of the most easily recognized attractions in the world. Visitors on a budget can take a free boat from Manhattan to Staten Island for a great view of the Statue of Liberty and the Manhattan skyline."
    },
    {
      name: "Chicago, Illinois",
      content:
        "America’s third-largest city offers world-class museums, great food, sporting events, and iconic architecture -- including Willis Tower, America’s tallest building. The Midwest city is also known for comedy. The Second City theater is where many famous comedians got their start, including Mike Meyers and Tina Fey."
    },
    {
      name: "Charleston, South Carolina",
      content:
        "Many say Charleston is one of the most beautiful and historic places in the United States. The coastal city has a very rich history. The Civil War began at its waterfront, at Fort Sumter, which visitors can explore. But present-day Charleston has a lot to offer, too. Conde Nast Traveler voted it the number one U.S. city, for its beautiful architecture, food, and friendly people."
    }
  ],
  Asia: [
    {
      name: "Bangkok",
      content:
        "Colorful and chaotic, Bangkok is the cultural, commercial, and spiritual heart of Thailand. The nation’s capital is also home to some of the friendliest and most welcoming people in the world; this is, in part, what makes it so alluring."
    },
    {
      name: "Hong Kong",
      content:
        "Proudly proclaiming itself to be ‘Asia’s World City,’ Hong Kong is certainly very different and distinct from the mainland. This is because the harbor city was formerly a British colony and was only returned to China in 1997."
    },
    {
      name: "Singapore",
      content:
        "Lying at the southern tip of the Malay Peninsula, the city-state of Singapore is a very compact, convenient, and cool place to visit."
    }
  ],
  Europe: [
    {
      name: "Paris",
      content:
        "Paris is filled with highly regarded museums, monuments and churches. You could easily spend your entire vacation admiring iconic sights like the Eiffel Tower, wandering through exhibits at the Louvre and strolling through the beautiful green space admiring flowers at the Luxembourg Gardens."
    },
    {
      name: "London",
      content:
        "Exploring the world-class British Museum, seeing a musical in the West End theater district, touring the Tower of London and gorging on fish and chips or a Sunday roast at a local pub are all part of the London bucket list experience. "
    },
    {
      name: "Rome",
      content:
        "Exploring the world-class British Museum, seeing a musical in the West End theater district, touring the Tower of London and gorging on fish and chips or a Sunday roast at a local pub are all part of the London bucket list experience. "
    }
  ],
  Africa: [
    {
      name: "Cape Town, South Africa",
      content:
        "Located at the base of Table Mountain and right on the Atlantic Ocean, Cape Town has it all. The city is home to a string of beautiful beaches and a plethora of natural attractions like climbing to the top of Lion's Head to view the sunrise or hiking in Table Mountain National Park."
    },
    {
      name: "Marrakesh, Morocco",
      content:
        "Morocco's fourth-largest city, Marrakesh is a mesmerizing place to visit filled with ancient architecture and modern culture."
    },
    {
      name: "Cairo, Egypt",
      content:
        "Right on the banks of the Nile River, Cairo is a chaotic and bustling city that is also the largest in Egypt. It's dubbed the city that never sleeps - there is always something going on in this sprawling metropolis, where ancient culture meets modern skyscrapers."
    }
  ],
  Australia: [
    {
      name: "Sydney",
      content:
        "Modern and sophisticated, Sydney is one of the best cities for tourists to visit on a tour to Australia. With fantastic beaches and the Blue Mountains on the doorstep, you will love Sydney if you enjoy the great outdoors."
    },
    {
      name: "Melbourne",
      content:
        "With its vintage shops, graffiti-covered backstreets and coffee culture, Melbourne has earned a reputation as Australia’s capital of cool. The city has plenty to see and do whether you enjoy art or sports. Located on Victoria’s famously beautiful coast, there is plenty of nature and wildlife in Melbourne as well."
    },
    {
      name: "Gold Coast",
      content:
        "The Gold Coast is a metropolitan region south of Brisbane on Australia’s east coast. It's famed for its long sandy beaches, surfing spots and elaborate system of inland canals and waterways."
    }
  ]
};

export default function App() {
  const [selectedContienent, setContinent] = useState("America");

  function continentClickHandler(continent) {
    setContinent(continent);
  }

  return (
    <div className="App">
      <h1>🌎Travel</h1>
      <h3>
        Checkout some of the best places to visit in world continent wise!
      </h3>
      <div>
        {" "}
        {Object.keys(continentsList).map((continent) => (
          <button
            onClick={() => continentClickHandler(continent)}
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              margin: "0.5rem 0.5rem",
              borderRadius: "0.5rem",
              background: "#FBEFDF ",
              border: "1px solid #7D999A "
            }}
          >
            {continent}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {continentsList[selectedContienent].map((continent) => (
            <li
              style={{
                padding: "1rem",
                width: "80%",
                listStyle: "none",
                border: "1px solid #7D999A ",
                margin: "2rem 0rem ",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "larger", padding: "0.5rem" }}>
                {continent.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{continent.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
