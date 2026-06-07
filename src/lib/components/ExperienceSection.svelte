<script lang="ts">
  let {
    title,
    startDate,
    endDate = "Present",
    company,
    location,
    description,
    coreSkills,
    roleType = "Full Time",
  } = $props();
</script>

<div class="w-full h-fit mt-10 border-t-2 border-amber-100 pt-4">
  <div class="relative h-30 w-full p-0 m-0">
    <div class="absolute left-0 top-0 h-fit">
      <h3
        class=" hover-underline-animation scopeone text-4xl text-left m-0 p-0 block"
      >
        {title}
      </h3>
      <h4 class="scopeone text-3xl text-left m-0 p-0 block text-gray-200">
        {company}
        <span class="text-green-300"
          ><span aria-hidden="true">//</span>{location}</span
        >
      </h4>
      <h5 class="scopeone text-3xl text-left m-0 p-0 block text-gray-200">
        {roleType}
      </h5>
    </div>
    <div class="absolute right-0 top-0">
      <h4 class="scopeone text-4xl text-right m-0 p-0 text-gray-200">
        {startDate} - {endDate}
      </h4>
      <h5 class="scopeone text-3xl text-right m-0 p-0 text-gray-400">
        {coreSkills}
      </h5>
    </div>
  </div>
  <p class="text-3xl scopeone text-justify text-blue-200">
    {description}
  </p>
</div>
