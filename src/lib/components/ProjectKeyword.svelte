<script lang="ts">
  import { Keyword } from "$lib";

  let { keyword = new Keyword("", "", (m) => {}) } = $props();

  const click = (mouseEvent: MouseEvent) => keyword.onclick(keyword);
</script>

<button
  onclick={click}
  class="{keyword.bgColor} px-1 border-2 rounded-xl m-2 text-center"
>
  <p class="scopeone text-2xl">{keyword.text}</p>
</button>
