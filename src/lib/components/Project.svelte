<script lang="ts">
  let { src = "", srcAlt = "", href = "", text = "", tags = [] } = $props();
</script>

<div class="sm:w-1/2 w-full pb-12 px-5">
  <div
    class="rounded-2xl w-full bg-clip-border border-2 border-white overflow-clip"
  >
    <img {src} alt={srcAlt} />
  </div>
  <p>
    <a class="text-lg pl-2 pb-4" target="_blank" {href}>{text}</a>
  </p>
</div>
