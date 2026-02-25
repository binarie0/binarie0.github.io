<script lang="ts">
  export let src = "";
  export let srcAlt = "";
  export let href = "";
  export let text = "";
</script>

<div class="w-1/2 pb-4 px-5">
  <img {src} alt={srcAlt} class="w-full text-center" />
  <p>
    <a class="text-lg" target="_blank" {href}>{text}</a>
  </p>
</div>
