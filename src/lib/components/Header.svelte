<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
  <Navbar class="px-4 sm:px-6 py-4 fixed w-full z-20 top-0 start-0 border-none">
    <div class="w-full flex justify-center">
      <NavUl class="flex flex-col items-center justify-center h-full text-white 
                  relative z-10 lg:flex-row lg:space-x-8 lg:mt-0 lg:bg-transparent text-center">
        
        <NavLi href="/" active={true} class="text-xl text-background: rgba(10, 17, 40, 1) transition-colors hover:text-black">
          Home
        </NavLi>
        
        <NavLi href="/fyp" class="text-xl text-background:#0A1128 transition-colors hover:text-blue-500">
          Find Your Place
        </NavLi>
        
        <img src="\images\logo.png" alt="Logo" class="mr-5 h-10 sm:h-">
        
        <NavLi href="/contact" class="text-xl text-background:#0A1128 transition-colors hover:text-blue-500">
          Company evaluation
        </NavLi>
        
        <NavLi href="/login" class="text-xl text-background:#0A1128 transition-colors hover:text-blue-500">
          Login
        </NavLi>
        
      </NavUl>
    </div>
  </Navbar>
</div>


