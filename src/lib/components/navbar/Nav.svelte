<script lang="ts">
  class Navlink {
    href: string;
    text: string;

    constructor(href = "", text = "") {
      this.href = href;
      this.text = text;
    }
  }
  let links: Navlink[] = [
    new Navlink("./resume.pdf", "Resume"),
    new Navlink("https://www.linkedin.com/in/zayers1/", "LinkedIn"),
    new Navlink("https://osu.ppy.sh/users/15632854", "osu!"),
    new Navlink("https://github.com/binarie0", "GitHub"),
    new Navlink("mailto:zach@binarie.dev", "Contact me!"),
  ];
</script>

<div>
  <ul
    class="md:pl-20 flex-wrap md:flex-nowrap md:justify-normal justify-center pointer-events-none top-0 left-0 flex md:h-12 h-20 w-full border-b-2 border-white bg-black hover:*:has-hover:opacity-100"
  >
    {#each links as navlink}
      <li
        class="pointer-events-auto flex flex-row *:text-white *:text-lg md:*:text-2xl self-center opacity-50 transition-opacity duration-500"
      >
        <a class="px-4" href={navlink.href}>{navlink.text}</a>
      </li>
    {/each}
  </ul>
</div>
