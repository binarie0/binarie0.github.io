<script lang="ts">
  import { Project, ProjectKeyword, Keyword } from "$lib";

  const filterKeyword = (keyword: Keyword) => {
    console.log(keyword.text);
  };
  let keywords: Array<Keyword> = [];

  const ui = new Keyword("UI", "bg-purple-700", filterKeyword);
  const audio = new Keyword("Audio", "bg-blue-500", filterKeyword);
  keywords.push(ui);
  keywords.push(audio);
</script>

<div class="flex flex-row">
  {#each keywords as keyword}
    <ProjectKeyword {keyword}></ProjectKeyword>
  {/each}
</div>
<div class="flex flex-wrap">
  <Project
    src="/media/bg1.png"
    srcAlt="The home page of Zero2."
    quicklink="https://meepking.itch.io/zero2"
    text="ZerO2 - UI, Music, and SFX"
    tags={[ui.copyAsLabel()]}
  ></Project>
  <Project
    src="/media/bg2.png"
    srcAlt="The home page of Fall In Order."
    quicklink="https://niknikskywalker.itch.io/fall-in-order"
    text="Fall In Order: UI and SFX"
  ></Project>
  <Project
    src="/media/bg8.png"
    srcAlt="The main background of Financial Times."
    quicklink="https://binarie.itch.io/financial-times"
    text="Financial Times: Illustration, Gameplay Programming"
  ></Project>
  <Project
    src="/media/bg7.jpg"
    srcAlt="The background of SEV-26"
    quicklink="https://www.youtube.com/watch?v=M7sV100Dmdc"
    text="LAUR - SEV-26 (SB)"
  ></Project>
  <Project
    src="/media/bg3.jpg"
    srcAlt="The background of Once Forgotten, Nothing Remains"
    quicklink="https://www.youtube.com/watch?v=zKybfN5I6SM"
    text="Raphiiel - Once Forgotten, Nothing Remains (SB)"
  ></Project>
  <Project
    src="/media/bg6.jpg"
    srcAlt="The background of PANAGIA"
    quicklink="https://www.youtube.com/watch?v=7tjQne9QSHI"
    text="BlackY - PAИAGIA (SB)"
  ></Project>
  <Project
    src="/media/bg4.jpg"
    srcAlt="The background of Lost Requiem"
    quicklink="https://www.youtube.com/watch?v=MmccFHPScKA"
    text="Ludicin - Lost Requiem (SB)"
  ></Project>
  <Project
    src="/media/bg5.jpg"
    srcAlt="The background of Whiteout"
    quicklink="https://www.youtube.com/watch?v=vdGU-OIZ2dQ"
    text="Genkaku Aria - Whiteout (SB)"
  ></Project>
</div>
