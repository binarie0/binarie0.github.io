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
    class="rounded-2xl w-full bg-clip-border border-2 border-white overflow-clip relative"
  >
    <img {src} alt={srcAlt} />
    <a href={quicklink} class="focus:*:*:opacity-90 focus:*:h-32">
      <div
        class="absolute -top-20 -right-10 transition-all hover:h-32 rotate-45 w-60 h-30 origin-bottom bg-white hover:*:opacity-90"
      >
        <img
          class="absolute -rotate-45 bottom-4 right-7/24 w-12 h-12 pointer-events-none transition-opacity"
          src="/media/share.png"
          alt="A redirect link for {quicklink}"
        />
      </div>
    </a>
  </div>
  <div class="flex">
    <p class="scopeone text-xl md:text-3xl p-1">
      {text}
    </p>
    <div class="flex">
      {#each tags as keyword}
        <ProjectKeyword {keyword}></ProjectKeyword>
      {/each}
    </div>
  </div>
</div>
