import Project from "./[project]";
import Loyalio1 from "/assets/projects/loyalio_1.png";
import portfolio from "/assets/projects/portfolio.png";
import loyalioApp from "/assets/projects/loyalio_app.png";
import filmarchiver from "/assets/projects/film-archival-planner.png";
export default async function ProjectPage() {
  const textPortfolio =
    "This project is a portfolio website built using Next.js 13, Tailwind CSS, and Supabase. It showcases my skills, projects, and achievements in a visually appealing and user-friendly manner." +
    "\n\nThe website is developed with Next.js, a powerful React framework that enables server-side rendering, static site generation, and excellent performance. It ensures fast load times and a smooth browsing experience for visitors." +
    "\n\nBy combining the power of Next.js 13, Tailwind CSS, and Supabase, this portfolio website stands out with its modern design, smooth performance, and seamless integration with a reliable backend. It not only showcases my skills and projects effectively but also demonstrates my ability to utilize cutting-edge technologies to create engaging and functional web experiences.";

  const loyalioSummary = `Loyalio is a cutting-edge loyalty card app developed by our innovative startup. Designed to revolutionize customer retention strategies, Loyalio offers a convenient and seamless way for businesses to reward and engage their loyal customers. 
   
   With Loyalio, users can easily manage and store their loyalty cards in one place, eliminating the need for physical cards and reducing clutter. The app also provides personalized offers and promotions tailored to individual preferences, enhancing the overall shopping experience. By leveraging advanced analytics, Loyalio enables businesses to gain valuable insights into customer behavior and preferences, allowinLoyalio is a loyalty card app. With its user-friendly interface and robust features, Loyalio is poised to transform the way businesses approach customer loyalty, fostering stronger connections and driving business growth.`;

  const filmArchivalSummary =
    "Film Archival & Planer is an internal software developed by 6 students from Technische Universität Vienna. Built with Angular and Bootstrap, it serves the needs of Tricky Women, an organization that organizes film festivals. The software enables efficient management and organization of film archives, ensuring easy access and retrieval of films. With its user-friendly interface and powerful features, Film Archival & Planer streamlines the workflow of Tricky Women, making the film festival organization process more seamless and organized.";
  return (
    <article className="mx-3 my-24 grid max-w-6xl grid-cols-1 gap-24 lg:mx-auto">
      <Project
        number="01"
        title="My Portfolio"
        text={textPortfolio}
        src={portfolio}
        shadowColor="rgb(42, 64, 95,0.5)"
        techs={["nextjs", "tailwind", "supabase"]}></Project>
      <Project
        number="02"
        title="Loyalio"
        text={loyalioSummary}
        src={loyalioApp}
        height={350}
        techs={["flutter", "firebase"]}
        shadowColor="rgb(65, 151, 145,0.4)"
        flip={true}></Project>
      <Project
        number="03"
        title="Loyalio Web"
        text={loyalioSummary}
        src={Loyalio1}
        shadowColor="rgb(65, 151, 145,0.4)"
        techs={["nuxt", "tailwind", "firebase"]}></Project>
      <Project
        number="04"
        title="Film Archival & Planer"
        text={filmArchivalSummary}
        src={filmarchiver}
        shadowColor="rgb(193, 219, 253,0.4)"
        techs={["angular", "bootstrap"]}
        flip={true}></Project>
      <Project
        number="05"
        title="TODO"
        text={textPortfolio}
        src={Loyalio1}
        shadowColor="rgb(42, 64, 95,0.5)"
        techs={["flutter", "supabase"]}></Project>
    </article>
  );
}
