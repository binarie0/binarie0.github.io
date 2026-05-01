<script lang="ts">
  let { title = "", children } = $props();
</script>

<div id={title.toLowerCase().replaceAll(" ", "-")} class="m-0 mb-20">
  <h3
    class="ophelia text-left text-3xl md:text-7xl hover-underline-animation left"
  >
    {title}
  </h3>

  <div>
    {@render children()}
  </div>
</div>

<style>
  .hover-underline-animation {
    display: inline-block;
    position: relative;
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 1rem;
    left: 0;
    background-color: #fff;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
  }

  .hover-underline-animation.left::after {
    transform-origin: top right;
  }

  .hover-underline-animation.left:hover::after {
    transform-origin: top left;
  }
</style>
