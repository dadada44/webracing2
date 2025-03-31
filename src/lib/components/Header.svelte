<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
  <Navbar class="px-4 sm:px-6 py-4 fixed w-full z-20 top-0 start-0 bg-sky-950 border-none">
    <div class="flex items-center lg:order-2">
      <NavHamburger class="text-white" />
    </div>
    <NavUl
    class="flex flex-col items-center bg-sky-950 justify-center h-full text-white 
           relative z-10 lg:flex-row lg:space-x-8 lg:mt-0 lg:bg-transparent">      
      <NavLi href="/" active={true} class=" text-xl text-sky-100 transition-colors hover:text-black">Home</NavLi>
      <NavLi href="/about" class="text-xl text-sky-100 text-center transition-colors hover:text-blue-500">About</NavLi>
      <NavLi href="/contact" class="text-xl text-sky-100 transition-colors hover:text-blue-500">Contact</NavLi>
      <NavLi href="/login" class="text-xl text-sky-100 transition-colors hover:text-blue-500">
        <button class="px-6 text-l py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105">
          Lrfvnjsrfjssdsdsd
        </button>
      </NavLi>
    </NavUl>
  </Navbar>
</div>
