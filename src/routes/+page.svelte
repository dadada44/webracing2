<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
    import { Heading, P } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { Blockquote } from 'flowbite-svelte';
</script>

<Header />

<div class="flex pt-30 pb-30 relative bg-cover bg-center">
  <div class="ml-30 flex-1 flex flex-col items-start justify-center text-white relative z-10 pl-8">
    <Heading tag="h1" class="background: #0A1128 mb-6 text-5xl font-extrabold md:text-5xl lg:text-6xl">
      IT Space
    </Heading>
    <P class="mb-6 background: #034078 text-2xl ">
      Find your place in IT world        
    </P>
    <Button 
      href="/fyp" 
      class="bg-slate-500 text-white hover:bg-slate-950 hover:scale-105 active:scale-100 text-white px-8 py-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out">
      Find Your Place
    </Button>
  </div>

  <div class="flex-1 flex items-center justify-end pr-8">
    <img src="images/heroimg.png" alt="Hero Image" class="w-full max-w-md object-cover mr-30">
  </div>
</div>



<div class="bg-gradient-to-b from-gray-500 to-white py-20 px-4 sm:px-16 lg:px-48">
    <Heading tag="h2" customSize="text-4xl font-extrabold text-center mb-6 text-white">
      🚀 Your Gateway to a Career in Tech
      Looking for a job in the IT industry? 
    </Heading>
    <P class="my-4 text-gray-900 text-center text-lg">
      IT Space connects tech professionals with top companies hiring for software development, cybersecurity, data science, DevOps, and more. Whether you're an experienced engineer or just starting your career, we make job searching easy, fast, and effective.    </P>
</div>

<Button 
      href="/fyp" 
      class="bg-slate-500 flex flex-wrap mb-25 ml-100 mr-100 justify-center text-white hover:bg-slate-950 hover:scale-105 active:scale-100 text-white px-8 py-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out">
      Find Your Place
</Button>


  
<div class="text-gray-600 dark:text-gray-300 space-y-6">
    <P class="mt-10 pl-10 pr-10 text-lg leading-relaxed text-justify max-w-3xl mx-auto">
      IT Space connects tech professionals with top companies hiring for software development, cybersecurity, data science, DevOps, and more. Whether you're an experienced engineer or just starting your career, we make job searching easy, fast, and effective.    </P>
  
    <div class="grid pl-10 pr-10 grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <P class="text-lg leading-relaxed text-justify">
        IT Space connects tech professionals with top companies hiring for software development, cybersecurity, data science, DevOps, and more. Whether you're an experienced engineer or just starting your career, we make job searching easy, fast, and effective.
      </P>
      <Blockquote class="text-xl font-semibold italic border-l-4 border-slate-500 pl-4 text-gray-800 dark:text-gray-200">
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
      </Blockquote>
    </div>
  
    <P class="text-lg pl-10 pr-10 leading-relaxed text-justify max-w-3xl mx-auto">
      IT Space connects tech professionals with top companies hiring for software development, cybersecurity, data science, DevOps, and more. Whether you're an experienced engineer or just starting your career, we make job searching easy, fast, and effective.    </P>
</div>
  
<div class="flex justify-center items-center py-20">
    <div class="relative w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden border-4 border-slate-500">
      <Carousel class="w-full h-96 object-cover" />
    </div>
</div>

<Footer />
