<script lang="ts">
  const onHover = (mouseEvent: MouseEvent) => {
    const element = mouseEvent.target as HTMLImageElement;
    element.style.opacity = "0.3";
    element.style.transform = "rotate(10deg) scale(1.1)";
  };

  const onExitHover = (mouseEvent: MouseEvent) => {
    const element = mouseEvent.target as HTMLImageElement;
    element.style.opacity = "0.2";
    element.style.transform = "rotate(0deg)";
  };
</script>

<div class="fixed top-0 left-0 w-full h-full pointer-events-none">
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <img
    onmouseenter={onHover}
    onmouseleave={onExitHover}
    src="/media/graphicdesignstar.png"
    class="absolute top-10 left-10 opacity-20 transition-all duration-200 z-10 pointer-events-auto"
    alt=""
  />
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <img
    onmouseenter={onHover}
    onmouseleave={onExitHover}
    src="/media/graphicdesignstar.png"
    class="absolute top-10 right-10 opacity-20 transition-all duration-200 z-10 pointer-events-auto"
    alt=""
  />
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <img
    onmouseenter={onHover}
    onmouseleave={onExitHover}
    src="/media/graphicdesignstar.png"
    class="absolute bottom-10 left-10 opacity-20 transition-all duration-200 z-10 pointer-events-auto"
    alt=""
  />
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <img
    onmouseenter={onHover}
    onmouseleave={onExitHover}
    src="/media/graphicdesignstar.png"
    class="absolute bottom-10 right-10 opacity-20 transition-all duration-200 z-10 pointer-events-auto"
    alt=""
  />
</div>
