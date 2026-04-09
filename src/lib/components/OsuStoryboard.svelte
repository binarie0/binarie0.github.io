<script lang="ts">
  import { StoryboardDecoder } from "osu-parsers";
  import { onMount } from "svelte";

  const decoder = new StoryboardDecoder();
  let decodedStoryboard;
  let { name = "", startTime = 0, endTime = -1 } = $props();

  onMount(async () => {
    decodedStoryboard = await decoder.decodeFromPath(`/osumaps/${name}.osb`);
    console.log(decodedStoryboard);
  });
</script>
