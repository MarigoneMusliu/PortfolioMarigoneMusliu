import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Quiz Game App",
    tools: ["HTML", "CSS", "JavaScript", "SQL", "MySQL", "PHP"],
    myRole: "Backend Developer",
    description:
      "My team and I built a quiz game app where users can test their programming language knowledge. I used two modules—UserModule and AdministrationModule—to structure the application. I worked on the backend, utilizing SQL and PHP to manage the database for questions and user scores. The app dynamically updates based on user input, making it an engaging and interactive platform for testing programming skills.",
    githubLink: "https://github.com/MarigoneMusliu/QuizGame",
    demoLink:
      "https://https-github-com-marigone-musliu-quiz-game-app-photos.vercel.app/", // Custom demo link for Quiz Game
    image: crefin,
  },
  {
    id: 2,
    name: "Skin Care Mari",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "MySQL", "JSON"],
    myRole: "Full Stack Developer",
    description: "",
    githubLink: "https://github.com/MarigoneMusliu/SkinCareMari",
    demoLink:
      "https://https-github-com-marigone-musliu-skin-care-mari-project-photo.vercel.app/", // Custom demo link for Skin Care Mari
    image: travel,
  },
  {
    id: 3,
    name: "Hotel Reservation Management",
    tools: ["HTML", "CSS", "JavaScript", "Laravel"],
    myRole: "Full Stack Developer",
    description:
      "I developed a hotel reservation system to simplify the booking process for customers and hotel staff. Users can reserve rooms, while staff can view, update, and manage all reservations. The system tracks key information, such as room types and booking dates, with a smooth and responsive interface built using Laravel and JavaScript.",
    githubLink: "https://github.com/MarigoneMusliu/Hotel-Reservation-",
    demoLink:
      "https://https-github-com-marigone-musliu-hotel-management-reservation.vercel.app/", // Custom demo link for Hotel Reservation
    image: realEstate,
  },
  {
    id: 4,
    name: "Movie App",
    tools: ["HTML", "CSS", "JavaScript", "ReactJS"],
    myRole: "ReactJS Developer",
    description:
      "I created a movie app that organizes TV shows and movies into categories for better navigation. The app was built with ReactJS, featuring a modern design and smooth user experience. It allows users to browse and explore entertainment options efficiently.",
    githubLink: "https://github.com/MarigoneMusliu/movie-app2",
    demoLink: "https://movie-app2-eight.vercel.app/", // Custom demo link for Movie App
    image: ayla,
  },
];
