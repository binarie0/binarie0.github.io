<script>
  import {
    LightPillar,
    Title,
    Overlay,
    ContentWrapper,
    GraphicDesignStars,
    Project,
    PageSection,
  } from "$lib";
  import ProjectSection from "$lib/components/ProjectSection.svelte";
  import ExperienceSection from "$lib/components/ExperienceSection.svelte";

  const getMyAge = () => {
    let myBirthday = new Date("08/31/2005");
    let now = new Date(Date.now());

    let years = now.getUTCFullYear() - myBirthday.getUTCFullYear();
    if (now.getUTCMonth() < myBirthday.getUTCMonth()) years -= 1;
    return years;
  };
</script>

<LightPillar></LightPillar>
<GraphicDesignStars></GraphicDesignStars>
<div class="smooth-scroll">
  <div class="block w-full h-144 mb-80 p-20">
    <Title text="binarie"></Title>
    <h2
      class="scopeone contrast w-full xl:w-1/4 text-3xl text-justify m-0 p-0 pt-8 pl-6"
    >
      Game Design student at RIT looking to expand the horizon of technical
      design work.
    </h2>
    <div
      class="bg-black-30 md:absolute md:right-30 flex flex-col text-right rounded-xl"
    >
      <a href="#projects">
        <h3
          class="text-center md:text-right ophelia md:bg-transparent text-5xl md:text-9xl contrast md:hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          Projects
        </h3>
      </a>
      <a href="https://www.linkedin.com/in/zayers1/">
        <h3
          class="text-center md:text-right ophelia md:bg-transparent text-5xl md:text-7xl contrast md:hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          LinkedIn
        </h3>
      </a>
      <a href="/resume.pdf">
        <h3
          class="text-center md:text-right ophelia md:bg-transparent text-5xl md:text-7xl contrast md:hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          Resume
        </h3>
      </a>
      <a href="mailto:zach@binarie.dev">
        <h3
          class="text-center md:text-right ophelia md:bg-transparent text-5xl md:text-7xl contrast md:hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          Contact
        </h3>
      </a>
    </div>
  </div>
  <ContentWrapper>
    <PageSection title="A Little About Me">
      <p class="scopeone text-3xl">
        My name is Zach, however I go by binarie in many online settings.
        Currently, I wear many hats across different companies and roles. I'm {getMyAge()}
        years old and am going onto my third year at
        <abbr title="Rochester Institute of Technology, Rochester NY">RIT</abbr>
        studying Game Design and Development. I love learning so many things about
        Games Development. Right now I consider myself a generalist as I love working
        on a lot of different things plus have a lot of experience with different
        areas of software engineering and art.
      </p>

      <p class="scopeone text-3xl pt-8">
        Currently, I am looking a lot into computer graphics as well as motion
        graphics for videos.
      </p>
    </PageSection>
    <PageSection title="Experience">
      <p class="scopeone text-3xl">
        Here's a brief rundown of all of my job experience so far in my {getMyAge() -
          18} years of being an adult.
      </p>
      <ExperienceSection
        title="Web Design Intern, Student IT Technical Assistant"
        startDate="June 2026"
        company="Maryland State Archives"
        location="Annapolis, MD"
        description="Auditing and Remediating ADA violations in current sites as well as developing new pages for existing content to better serve archival needs."
        coreSkills="HTML, CSS, JS, UX Design"
      ></ExperienceSection>
      <ExperienceSection
        title="Web Developer > Webmaster"
        startDate="January 2026"
        company="echoes VIP"
        location="Henrietta, NY"
        coreSkills="Svelte, MDsveX, JS, Team Management"
        description="Develop web features to display web games and blogs for a collective of students. Developed an in-site search engine,
        moved blog posts to a Markdown format, designed the job board, and also made a custom audio waveform visualizer for audio clips."
        roleType="Part Time"
      ></ExperienceSection>
      <ExperienceSection
        title="Teaching Assistant"
        company="Rochester Institute of Technology"
        startDate="August 2025"
        endDate="May 2026"
        location="Henrietta, NY"
        description="Aided in developing lesson materials for first-year Interactive Games and Media students for IGME 105/106 with
        Professor Chris Egert. These classes focused on Data Structures and Algorithms, as well as developing games using MonoGame."
        coreSkills="Management, Data Structures"
        roleType="Part Time"
      ></ExperienceSection>
      <ExperienceSection
        title="Animator"
        company="osu!"
        startDate="October 2024"
        location="Remote"
        description="Animate sprites to sync with music. Help maintain and develop new features for tools. Together, the design team has helped to maintain
      interest in osu! tournaments by making exciting and visually stunning content."
        coreSkills="C#, Tooling, Animation"
        roleType="Freelance / On-call"
      ></ExperienceSection>

      <!--         
        I am currently a web design intern with the Maryland State Archives, updating
        websites to fit the modern framework while auditing and remediating ADA violations.
        I work freelance for osu! as a 2D animator, making the videos you see behind
        some of the official tournament gameplay. I also work at my school, RIT,
        as a Teaching Assistant for Data Structures and Algorithms. Lastly, I work
        for <i>echoes</i> as a web designer, making components and adding overall
        functionality to the site. -->
    </PageSection>
    <PageSection title="Projects">
      <ProjectSection></ProjectSection>
    </PageSection>
  </ContentWrapper>
  <Overlay></Overlay>
</div>

<style>
  .bg-black-30 {
    background-color: rgba(0, 0, 0, 0.3);
    margin: 16px;
  }
  @media screen and (min-width: 1280px) {
    .bg-black-30 {
      background-color: rgba(0, 0, 0, 0);
    }
  }
</style>
