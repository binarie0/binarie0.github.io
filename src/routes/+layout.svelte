<script lang="ts">
  import favicon1 from "$lib/assets/SVG/0.svg";
  import favicon2 from "$lib/assets/SVG/1.svg";

  let icoMap = new Map<number, string>();
  icoMap.set(0, favicon1);
  icoMap.set(1, favicon2);
  let activeFavicon = $state(favicon1);
  import "../app.css";
  let { children } = $props();

  let currentFavicon = 0;
  let interval: NodeJS.Timeout;
  $effect(() => {
    interval = setInterval(() => {
      currentFavicon = currentFavicon == 0 ? 1 : 0;
      activeFavicon = icoMap.get(currentFavicon) || favicon1;
      console.log(activeFavicon);
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <link rel="icon" href={activeFavicon} />
  <title>Portfolio - binarie (Zach)</title>
</svelte:head>
{@render children()}
