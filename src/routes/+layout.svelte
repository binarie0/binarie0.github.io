<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Portfolio - binarie (Zach)</title>
</svelte:head>
<div class="smooth-scroll">
{@render children()}
</div>