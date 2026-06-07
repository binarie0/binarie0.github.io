<script lang="ts">
  import { onMount } from "svelte";

  const visitKey = "visit";

  let blackbox: HTMLDivElement;
  const onload = () => {
    let data = localStorage.getItem(visitKey);
    if (Boolean(data)) {
      blackbox.style.opacity = "0";
    } else {
      //initiate animation here
      blackbox.style.opacity = "0";
      localStorage.setItem(visitKey, "1");
    }
  };
  onMount(onload);
</script>

<div
  class="bg-black pointer-events-none fixed top-0 left-0 w-full h-full z-50 duration-1000 transition-opacity"
  bind:this={blackbox}
></div>
