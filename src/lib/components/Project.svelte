<script lang="ts">
  import { Keyword, ProjectKeyword } from "$lib";
  let {
    src = "",
    srcAlt = "",
    quicklink = "",
    text = "",
    tags = [],
  } = $props();
</script>

<div class="sm:w-1/2 w-full pb-12 px-5">
  <div
    class="rounded-2xl w-full bg-clip-border border-2 border-white overflow-clip"
  >
    <img {src} alt={srcAlt} />
  </div>
  <div class="flex">
    <p class="scopeone text-xl md:text-3xl">
      {text}
    </p>
    <a href={quicklink}>
      <img
        class=" w-6 h-6 mt-0.5 ml-2"
        src="/media/share.png"
        alt="A redirect link for {quicklink}"
      />
    </a>
    {#each tags as keyword}
      <ProjectKeyword {keyword}></ProjectKeyword>
    {/each}
  </div>
</div>
