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
</script>

<LightPillar></LightPillar>
<GraphicDesignStars></GraphicDesignStars>
<div class="smooth-scroll">
  <div class="block w-full h-144 mb-80 p-20">
    <Title text="binarie"></Title>
    <p
      class="scopeone contrast w-full xl:w-1/4 text-3xl text-justify m-0 p-0 pt-8 pl-6"
    >
      Game Design student at RIT looking to expand the horizon of technical
      design work.
    </p>
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
        Currently, I wear many hats across different companies and roles. I work
        for osu! as a 2D animator, making the videos you see behind some of the
        official tournament gameplay. I also work at my school, RIT, as a
        Teaching Assistant for Data Structures and Algorithms. Lastly, I work
        for <i>echoes</i> as a web designer, making components and adding overall
        functionality to the site.
      </p>
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
