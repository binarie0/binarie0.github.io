<script lang="ts">
  let {
    title,
    startDate,
    endDate = "Present",
    company,
    companyLink,
    location,
    description,
    coreSkills,
    roleType = "Full Time",
  } = $props();
</script>

<div class="w-full h-fit mt-10 border-t-2 border-amber-100 pt-4">
  <div class="relative 2xl:h-30 h-52 w-full p-0 m-0">
    <div class="2xl:absolute relative left-0 top-0 h-fit">
      <h3 class="scopeone text-4xl text-left m-0 p-0 block">
        {title}
      </h3>

      <h4
        class="scopeone 2xl:text-3xl text-xl text-left m-0 p-0 block text-gray-200"
      >
        <a
          href={companyLink}
          target="_blank"
          class="pointer scopeone 2xl:text-3xl text-xl text-left m-0 p-0 text-inherit underline transition hover:underline-offset-2 hover:text-blue-300"
        >
          {company}<span class="sr-only">(link opens in new window)</span>
        </a>

        <span class="text-green-300"
          ><span aria-hidden="true">//</span>{location}</span
        >
      </h4>
      <h5
        class="scopeone 2xl:text-3xl text-xl text-left m-0 p-0 block text-gray-200"
      >
        {roleType}
      </h5>
    </div>
    <div class="2xl:absolute relative 2xl:right-0 2xl:top-0">
      <h4
        class="scopeone 2xl:text-4xl text-xl 2xl:text-right text-left m-0 p-0 text-gray-200"
      >
        {startDate} - {endDate}
      </h4>
      <h5
        class="scopeone 2xl:text-3xl text-xl 2xl:text-right text-left m-0 p-0 text-gray-400"
      >
        {coreSkills}
      </h5>
    </div>
  </div>
  <p class="2xl:text-3xl text-xl scopeone text-justify text-blue-200">
    {description}
  </p>
</div>
