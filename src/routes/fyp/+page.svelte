<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Search, Button, Card } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Header />

<h1 class="mt-40 mb-15 font-Inter font-bold text-3xl text-center">
    Find your place in IT world
  </h1>
  

<div class="flex flex-col items-center justify-center min-h-screen pl-40 pr-40">
  <!-- Search Component -->
  <div class="mb-8 w-full max-w-xl">
    <Search placeholder="Software Engineer" class="text-left w-full">
      <Button class="me-1 px-10 py-2 text-sm bg-slate-500 hover:bg-slate-950">Search</Button>
    </Search>
  </div>
  
  <!-- Cards -->
  <div class="flex flex-wrap justify-center mt-10 gap-30 w-full">
    <Card class="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 hover:cursor-pointer">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Junior Software Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          We are looking for a skilled and passionate Software Engineer to join our dynamic team. The ideal candidate will be responsible for designing, developing, testing, and maintaining high-quality software solutions.
        </p>
        <Button class="w-fit">
          More <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>    

    <Card class="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 hover:cursor-pointer">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Software Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          We are looking for a skilled and passionate Software Engineer to join our dynamic team. The ideal candidate will be responsible for designing, developing, testing, and maintaining high-quality software solutions.
        </p>
        <Button class="w-fit">
          More <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>

    <Card class="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 hover:cursor-pointer">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Middle Software Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          We are looking for a skilled and passionate Software Engineer to join our dynamic team. The ideal candidate will be responsible for designing, developing, testing, and maintaining high-quality software solutions.
        </p>
        <Button class="w-fit">
          More <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>

    <Card class="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 hover:cursor-pointer">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Software Engineer</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          We are looking for a skilled and passionate Software Engineer to join our dynamic team. The ideal candidate will be responsible for designing, developing, testing, and maintaining high-quality software solutions.
        </p>
        <Button class="w-fit">
          More <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>
  </div>
</div>


<Footer />
