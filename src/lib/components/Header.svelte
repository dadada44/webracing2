<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
  <Navbar class="px-4 sm:px-6 py-4 fixed w-full z-20 top-0 start-0 bg-sky-950 border-none">
    <NavBrand href="/">
      <span class="self-center text-xl font-semibold text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger class="text-black" />
    <NavUl class="mx-auto flex space-x-6 text-white justify-center">
      <NavLi href="/" active={true} class=" text-sky-100 transition-colors hover:text-sky-400 ">Home</NavLi>
      <NavLi href="/about" class="text-sky-100 transition-colors hover:text-sky-400 ">About</NavLi>
      <NavLi href="/contact" class="text-sky-100 transition-colors hover:text-sky-400 ">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

