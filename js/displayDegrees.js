// Degree data with categories
const degreeCategories = [
  {
    category: "Business & Innovation Degrees",
    degrees: [
      {
        flag: "/BT",
        title: "Business Technology",
        video: "https://www.uat.edu/media/MajorsBadge-BT.mp4#t=0.001",
        link: "https://www.uat.edu/business-technology-degree"
      },
      {
        flag: "/TI",
        title: "Technology Innovation",
        video: "https://www.uat.edu/media/MajorsBadge-TI.mp4#t=0.001",
        link: "https://www.uat.edu/master-of-science"
      },
      {
        flag: "/TL",
        title: "Technology Leadership",
        video: "https://www.uat.edu/media/MajorsBadge-TL.mp4#t=0.001",
        link: "https://www.uat.edu/master-of-science"
      },
      {
        flag: "/TS",
        title: "Technology Studies",
        video: "https://www.uat.edu/media/MajorsBadge-TS.mp4#t=0.001",
        link: "https://www.uat.edu/technology-studies-degree"
      }
    ]
  },
  {
    category: "Creation & Simulation Degrees",
    degrees: [
      {
        flag: "/DMF",
        title: "Digital Maker and Fabrication",
        video: "https://www.uat.edu/media/MajorsBadge-DMF.mp4#t=0.001",
        link: "https://www.uat.edu/digital-maker-and-fabrication-degree"
      },
      {
        flag: "/HCI",
        title: "Human Computer Interaction",
        video: "https://www.uat.edu/media/MajorsBadge-HCI.mp4#t=0.001",
        link: "https://www.uat.edu/human-computer-interaction-degree"
      },
      {
        flag: "/RES",
        title: "Robotics and Embedded Systems",
        video: "https://www.uat.edu/media/MajorsBadge-RES.mp4#t=0.001",
        link: "https://www.uat.edu/robotics-degree"
      },
      {
        flag: "/VR",
        title: "Virtual Reality",
        video: "https://www.uat.edu/media/MajorsBadge-VR.mp4#t=0.001",
        link: "https://www.uat.edu/virtual-reality-degree"
      }
    ]
  },
  {
    category: "Cyber Security Degrees",
    degrees: [
      {
        flag: "/CS",
        title: "Cyber Security",
        video: "https://www.uat.edu/media/MajorsBadge-CS.mp4#t=0.001",
        link: "https://www.uat.edu/master-of-science"
      },
      {
        flag: "/NE",
        title: "Network Engineering",
        video: "https://www.uat.edu/media/MajorsBadge-NE.mp4#t=0.001",
        link: "https://www.uat.edu/network-engineering-degree"
      },
      {
        flag: "/NS",
        title: "Network Security",
        video: "https://www.uat.edu/media/MajorsBadge-NS.mp4#t=0.001",
        link: "https://www.uat.edu/network-security-degree"
      },
      {
        flag: "/TF",
        title: "Technology Forensics",
        video: "https://www.uat.edu/media/MajorsBadge-TF.mp4#t=0.001",
        link: "https://www.uat.edu/technology-forensics-degree"
      }
    ]
  },
  {
    category: "Digital Arts Degrees",
    degrees: [
      {
        flag: "/AA",
        title: "Advertising Art",
        video: "https://www.uat.edu/media/MajorsBadge-AA.mp4#t=0.001",
        link: "https://www.uat.edu/advertising-art-degree"
      },
      {
        flag: "/DM",
        title: "Digital Marketing",
        video: "https://www.uat.edu/media/MajorsBadge-DM.mp4#t=0.001",
        link: "https://www.uat.edu/digital-marketing-degree"
      },
      {
        flag: "/DV",
        title: "Digital Video",
        video: "https://www.uat.edu/media/MajorsBadge-DV.mp4#t=0.001",
        link: "https://www.uat.edu/digital-video-degree"
      }
    ]
  },
  {
    category: "Game Studies Degrees",
    degrees: [
      {
        flag: "/GAA",
        title: "Game Art and Animation",
        video: "https://www.uat.edu/media/MajorsBadge-GAA.mp4#t=0.001",
        link: "https://www.uat.edu/game-art-and-animation-degree"
      },
      {
        flag: "/GD",
        title: "Game Design",
        video: "https://www.uat.edu/media/MajorsBadge-GP_%281%29_1.mp4#t=0.001",
        link: "https://www.uat.edu/game-design-degree"
      },
      {
        flag: "/GPM",
        title: "Game Production and Management",
        video: "https://www.uat.edu/media/MajorsBadge-GPM.mp4#t=0.001",
        link: "https://www.uat.edu/master-of-science"
      },
      {
        flag: "/GP",
        title: "Game Programming",
        video: "https://www.uat.edu/media/MajorsBadge-GP.mp4#t=0.001",
        link: "https://www.uat.edu/game-programming-degree"
      }
    ]
  },
  {
    category: "Software Engineering Degrees",
    degrees: [
      {
        flag: "/ACS",
        title: "Advancing Computer Science",
        video: "https://www.uat.edu/media/MajorsBadge-ACS.mp4#t=0.001",
        link: "https://www.uat.edu/computer-science-degree"
      },
      {
        flag: "/AI",
        title: "Artificial Intelligence",
        video: "https://www.uat.edu/media/MajorsBadge-AI.mp4#t=0.001",
        link: "https://www.uat.edu/artificial-intelligence-degree"
      },
      {
        flag: "/DS",
        title: "Data Science",
        video: "https://www.uat.edu/media/MajorsBadge-DS.mp4#t=0.001",
        link: "https://www.uat.edu/data-science-degree"
      },
      {
        flag: "/SE",
        title: "Software Engineering",
        video: "https://www.uat.edu/media/MajorsBadge-SE.mp4#t=0.001",
        link: "https://www.uat.edu/master-of-science"
      }
    ]
  }
];


// Function to create a degree card
function createDegreeCard({ flag, title, video, link }) {
	const card = document.createElement('div');
	card.className = "degree w-[250px] aspect-square relative overflow-hidden group";

	card.innerHTML = `
		<a href="${link}" class="block w-full h-full">
			<div class="flag bg-white rounded-r-lg px-4 py-2 absolute top-1/2 left-0 transform  -translate-y-1/2 opacity-90 text-center z-10 transition-all duration-300 group-hover:opacity-100">
				<div class="text-3xl font-bold">${flag}</div>
				<p class="text-sm font-semibold">${title}</p>
			</div>
			<video
				preload="metadata"
				muted
				loop
				class="w-full h-full object-cover scale-100 transition-transform duration-300 group-hover:scale-110"
			>
				<source src="${video}" type="video/mp4">
			</video>
		</a>
	`;

	// Add hover video play/pause functionality
	const videoElement = card.querySelector('video');
	card.addEventListener('mouseenter', () => videoElement.play());
	card.addEventListener('mouseleave', () => {
		videoElement.pause();
		videoElement.currentTime = 0; // Reset video
	});

	return card;
}

// Function to create a category section
function createCategorySection(category, degrees) {
	const section = document.createElement('div');
	section.className = "category-section";

	// Create category title
	const title = document.createElement('div');
	title.className = "text-2xl font-bold mb-4";
	title.textContent = category;
	section.appendChild(title);

	// Create card container
	const cardContainer = document.createElement('div');
	cardContainer.className = "flex gap-4 flex-wrap justify-center";

	// Add cards to container
	degrees.forEach(degree => {
		const card = createDegreeCard(degree);
		cardContainer.appendChild(card);
	});

	section.appendChild(cardContainer);
	return section;
}

// Render all categories and degrees
const degreesContainer = document.getElementById('degrees-container');
degreeCategories.forEach(({ category, degrees }) => {
	const section = createCategorySection(category, degrees);
	degreesContainer.appendChild(section);
});
