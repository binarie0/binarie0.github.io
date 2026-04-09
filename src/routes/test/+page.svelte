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
</script>

<LightPillar></LightPillar>
<GraphicDesignStars></GraphicDesignStars>
<div class="smooth-scroll">
  <div class="block w-full h-144 mb-80 p-20">
    <Title text="binarie"></Title>
    <p
      class="scopeone contrast w-full md:w-1/4 text-3xl text-justify m-0 p-0 pt-8 pl-6"
    >
      Game Design student @ RIT looking to expand the horizon of technical
      design work.
    </p>
    <div
      class="md:bg-transparent bg-black md:absolute md:right-30 flex flex-col text-right"
    >
      <a href="#projects">
        <h3
          class="text-right ophelia bg-black md:bg-transparent text-3xl md:text-9xl contrast hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          Projects
        </h3>
      </a>
      <a href="#projects">
        <h3
          class="text-right ophelia bg-black md:bg-transparent text-2xl md:text-7xl contrast hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          LinkedIn
        </h3>
      </a>
      <a href="#projects">
        <h3
          class="text-right ophelia bg-black md:bg-transparent text-2xl md:text-7xl contrast hover:translate-x-2 transition-all duration-200 linkappear p-0"
        >
          Resume
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
    <div id="projects">
      <h3 class="ophelia text-left text-3xl md:text-7xl">Projects</h3>
    </div>
    <div class="flex flex-wrap">
      <Project
        src="/media/bg1.png"
        srcAlt="The home page of Zero2."
        href="https://meepking.itch.io/zero2"
        text="ZerO2 - UI, Music, and SFX"
      ></Project>
      <Project
        src="/media/bg2.png"
        srcAlt="The home page of Fall In Order."
        href="https://niknikskywalker.itch.io/fall-in-order"
        text="Fall In Order: UI and SFX"
      ></Project>
      <Project
        src="/media/bg8.png"
        srcAlt="The main background of Financial Times."
        href="https://binarie.itch.io/financial-times"
        text="Financial Times: Illustration, Gameplay Programming"
      ></Project>
      <Project
        src="/media/bg7.jpg"
        srcAlt="The background of SEV-26"
        href="https://www.youtube.com/watch?v=M7sV100Dmdc"
        text="LAUR - SEV-26 (SB)"
      ></Project>
      <Project
        src="/media/bg3.jpg"
        srcAlt="The background of Once Forgotten, Nothing Remains"
        href="https://www.youtube.com/watch?v=zKybfN5I6SM"
        text="Raphiiel - Once Forgotten, Nothing Remains (SB)"
      ></Project>
      <Project
        src="/media/bg6.jpg"
        srcAlt="The background of PANAGIA"
        href="https://www.youtube.com/watch?v=7tjQne9QSHI"
        text="BlackY - PAИAGIA (SB)"
      ></Project>
      <Project
        src="/media/bg4.jpg"
        srcAlt="The background of Lost Requiem"
        href="https://www.youtube.com/watch?v=MmccFHPScKA"
        text="Ludicin - Lost Requiem (SB)"
      ></Project>
      <Project
        src="/media/bg5.jpg"
        srcAlt="The background of Whiteout"
        href="https://www.youtube.com/watch?v=vdGU-OIZ2dQ"
        text="Genkaku Aria - Whiteout (SB)"
      ></Project>
    </div>
  </ContentWrapper>
  <Overlay></Overlay>
</div>
