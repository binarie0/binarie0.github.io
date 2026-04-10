<script lang="ts">
  let { title = "", children } = $props();
</script>

<div id={title.toLowerCase().replaceAll(" ", "-")} class="m-0 mb-20">
  <h3 class="ophelia text-left text-3xl md:text-7xl">{title}</h3>
  <div>
    {@render children()}
  </div>
</div>
