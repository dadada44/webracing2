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

<div class="text-center pt-50 pb-50 relative bg-cover bg-center" style="background-image: url('/images/bg.png');">
    <div class="absolute inset-0 bg-opacity-3 backdrop-blur-lg"></div>
    <div class="flex flex-col items-center justify-center h-full text-white relative z-10">
        <Heading tag="h1" class=" text-white mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            We invest in the world’s potential
        </Heading>
        <P class="mb-6 text-white text-2xl text-center sm:px-16 xl:px-48 dark:text-gray-200">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </P>
        <Button 
        href="/" 
        class="bg-slate-500 text-white hover:bg-slate-950 hover:scale-105 active:scale-100 text-white px-8 py-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out">
          Learn more
          <ArrowRightOutline class="w-6 h-6 ms-2" />
      </Button>
    </div>
</div>

<div class="bg-gradient-to-b from-slate-900 to-white py-20 px-4 sm:px-16 lg:px-48">
    <Heading tag="h2" customSize="text-4xl font-extrabold text-center mb-6 text-white">
        Payments tool for companies
    </Heading>
    <P class="my-4 text-gray-200 text-center text-lg">
        Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.
    </P>
    <P class="mb-6 text-center text-lg text-gray-200">
        Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
    </P>
    <Button 
        href="/" 
        class="bg-slate-500 text-white hover:bg-slate-950 hover:scale-105 active:scale-100 px-8 py-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out">
          Read more
          <ArrowRightOutline class="w-6 h-6 ms-2" />
    </Button>
</div>


  
<div class="text-gray-600 dark:text-gray-300 space-y-6">
    <P class="mt-10 pl-10 pr-10 text-lg leading-relaxed text-justify max-w-3xl mx-auto">
      Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
    </P>
  
    <div class="grid pl-10 pr-10 grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <P class="text-lg leading-relaxed text-justify">
        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
      </P>
      <Blockquote class="text-xl font-semibold italic border-l-4 border-slate-500 pl-4 text-gray-800 dark:text-gray-200">
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
      </Blockquote>
    </div>
  
    <P class="text-lg pl-10 pr-10 leading-relaxed text-justify max-w-3xl mx-auto">
      Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.
    </P>
</div>
  
<div class="flex justify-center items-center py-20">
    <div class="relative w-full max-w-4xl shadow-2xl rounded-lg overflow-hidden border-4 border-slate-500">
      <Carousel class="w-full h-96 object-cover" />
    </div>
</div>


<Footer />
