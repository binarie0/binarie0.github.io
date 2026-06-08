<script lang="ts">
  let { title = "", children } = $props();
  // svelte-ignore state_referenced_locally
  let id = title.toLowerCase().replaceAll(" ", "-");
  const copyToClipboard = () => {
    let uniqueID = window.location.href.split("#")[0] + "#" + id;
    navigator.clipboard.writeText(uniqueID);
    window.location.assign(uniqueID);
  };
</script>

<div id={title.toLowerCase().replaceAll(" ", "-")} class="m-0 mb-20">
  <h2
    class="ophelia lg:text-left text-5xl lg:text-7xl text-center hover-underline-animation left linker"
  >
    <button title="Press to copy section link" onclick={copyToClipboard}>
      {title}
    </button>
  </h2>

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
