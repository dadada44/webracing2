<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
</script>

<div class="flex flex-col mt-30">
  
  <Footer footerType="logo" class="bg-gray-800 text-white py-4 mt-auto rounded-none">
    <div class="sm:flex sm:items-center sm:justify-center text-center">
      <FooterLinkGroup ulClass="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
    <FooterCopyright href="/" by="" class="text-center  " />
  </Footer>
</div>
