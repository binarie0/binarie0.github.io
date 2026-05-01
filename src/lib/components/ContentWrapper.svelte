<script lang="ts">
  let { children } = $props();
</script>

<div class="main-content-transition"></div>
<div class="main-content-wrap">
  {@render children()}
</div>
