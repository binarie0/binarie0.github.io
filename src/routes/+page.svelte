<script lang="ts">
  import { ThreeBackground, Nav, Overlay, Project } from "$lib";
</script>

<ThreeBackground></ThreeBackground>
<Nav></Nav>
<Overlay></Overlay>
<div id="main-wrap">
  <div class="md:w-3/5 w-full m-auto h-full">
    <h3 class="glitch-text">Hello!</h3>
    <p>
      I am Zach, a second-year computing student at RIT studying Game Design and
      Development. I currently am open for work in software engineering, game
      design, and website development. I am available for relocation.
      <br /><br />
      I currently work for osu! as a freelance designer. I also work as a Teaching
      Assistant at RIT, where I assist in teaching data structures and algorithms.
    </p>
    <h3 class="glitch-text">Projects</h3>
    <div class="flex flex-wrap">
      <Project
        src="/media/bg1.png"
        srcAlt="The home page of Zero2."
        href="https://meepking.itch.io/zero2"
        text="ZerO2: UI, Music, and SFX"
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
    <p id="copyright" class="foot">
      Zach A | binarie 2025. <a href="mailto:zach@binarie.dev">Contact here</a> for
      any inquiries.
    </p>
  </div>
</div>
