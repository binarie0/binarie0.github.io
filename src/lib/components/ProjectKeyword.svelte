<script lang="ts">
  import { Keyword } from "$lib";

  let { keyword = new Keyword("", "", (m) => {}) } = $props();

  const click = (mouseEvent: MouseEvent) => keyword.onclick(keyword);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  onclick={click}
  class="{keyword.bgColor} p-1 border-2 rounded-xl m-2 text-center"
>
  <p class="scopeone text-2xl">{keyword.text}</p>
</div>
