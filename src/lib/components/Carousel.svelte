<script>
  import { Carousel } from 'flowbite-svelte';
</script>

<div class="max-w-4xl">
  <Carousel images={[
      { src: "/images/image1.png", alt: "Image 1" },
      { src: "/images/image2.jpg", alt: "Image 2" },
      { src: "/images/image3.jpg", alt: "Image 3" }
  ]} let:Controls>
      <Controls />
  </Carousel>
</div>
