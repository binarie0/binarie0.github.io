<script lang="ts">
  export let src = "";
  export let srcAlt = "";
  export let href = "";
  export let text = "";
</script>

<div class="w-1/2 pb-4 px-5">
  <div
    class="rounded-2xl w-full bg-clip-border border-2 border-white overflow-clip"
  >
    <img {src} alt={srcAlt} />
  </div>
  <p>
    <a class="text-lg pl-2" target="_blank" {href}>{text}</a>
  </p>
</div>
