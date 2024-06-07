import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Eric Broberg, Software Engineer",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage
              src="/eb_avatar_classic_bw.JPG"
              alt={siteConfig.author}
            />
            <AvatarFallback>EB</AvatarFallback>
          </Avatar>
          {/* <Avatar className="h-48 w-48">
            <AvatarImage src="/palms_bw.JPG" alt={siteConfig.author} />
            <AvatarFallback>EB</AvatarFallback>
          </Avatar>  */}
          {/* <Avatar className="h-48 w-48">
            <AvatarImage src="/palms_color.JPG" alt={siteConfig.author} />
            <AvatarFallback>EB</AvatarFallback>
          </Avatar> */}
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Engineer [Frontend, Full Stack]
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <p className="text-muted-foreground text-lg py-4">
            👋 I'm Eric.
            <br />I derive deep gratification from the design and creation of
            aesthetically pleasing, efficient systems.
          </p>
          <hr className="my-4" />
          <h4 className="text-2xl font-bold text-left">Skills</h4>
          <p className="text-muted-foreground text-lg py-1 break-words">
            <span className="font-bold">Languages:</span> JavaScript, ES6,
            Typescript, HTML5, CSS3, SQL, Java, PHP, SQL.
          </p>
          <p className="text-muted-foreground text-lg py-1 break-words">
            <span className="font-bold">Frameworks:</span> React, Redux,
            Next.js, Angular, Node, Express, GraphQL, jQuery, Jasmine, Jest,
            Playwright.
          </p>{" "}
          <p className="text-muted-foreground text-lg py-1 break-words">
            <span className="font-bold">Tools:</span> Docker, Jenkins, Git,
            Kibana, Grafana, Snyk, Webpack, Postman, RabbitMQ, Azure, AWS.
          </p>{" "}
          <p className="text-muted-foreground text-lg py-1 break-words">
            <span className="font-bold">Concepts:</span> accessibility, i18n,
            agile, responsive, cross-browser, web performance, UX, code reviews,
            TDD.
          </p>
          <hr className="my-4" />
          <p className="text-muted-foreground text-lg py-1 break-words">
            I am a software engineer based near San Francisco (in Oakland, CA), well-versed in a
            myriad of frontend and backend languages and frameworks. I am
            well-versed in functional and object-oriented programming and keep
            current with the latest technologies. In my recent projects, I have
            been building with React or Angular (combined with both
            Javascript/ES6 and Typescript) on the frontend, and Java, Node, or
            PHP with RESTful APIs on the server side. On the database side, I
            have experience with GraphQL, MongoDB, MySQL, MSSQL, CockroachDB,
            and PostgreSQL.
            <br />
            <br />
            When I approach a new problem, I break it down into its component
            parts, consider multiple available options, forge an actionable
            path, and then work iteratively towards a solution.
            <br />
            <br />
            I value openness, robust collaboration, and precision in
            communication. I take pride in elegant, clean, concise, and modular
            code. I thrive in an environment that respects autonomy, wellness,
            learning, growth and creativity.
            <br />
            <br />
            Recently, I was the UI tech lead on an internal observability
            dashboard for The Hut Group’s B2B Team, building a paginated,
            searchable, filterable, and sortable UI and enabling users to
            rapidly find and fix errors in the order flow. I implemented
            frontend caching, as well as building & deploying a backend
            microservice and database schema handling granular authorization
            control. After deployment (using VMs, Docker, Jenkins) the tool
            resulted in a 80% increase in efficiency over the old workflow.
            <br />
            <br />
            More about me: Fluent in Spanish. Conversational in Portuguese. Once
            took a course in bird language. Have traveled to 30 countries. Was a
            Peace Corps volunteer in the Dominican Republic. Started an organic
            rare subtropical fruit farm. Hobbies: photography, soccer,
            meditation, exploring hidden beaches and hot springs, being an
            Airbnb host, and spending time with my seven year old daughter.
          </p>
        </div>
      </div>
    </div>
  );
}
