<script>
  import { Card, Button, Label, Input } from 'flowbite-svelte';
  import { goto } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let errorMessage = "";

  async function handleRegister() {
    if (password !== confirmPassword) {
      errorMessage = "Passwords do not match!";
      return;
    }
    const res = await fetch("/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      goto("/login");
    } else {
      const data = await res.json();
      errorMessage = data.error;
    }
  }
</script>

<Header />

<div class="flex justify-center items-center mt-20 min-h-screen px-4 sm:px-6 lg:px-8">
  <Card class="w-full max-w-md p-6 shadow-2xl border border-gray-300 dark:border-gray-700 rounded-lg">
    <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
    {#if errorMessage}
      <p class="text-red-500 text-center mt-2">{errorMessage}</p>
    {/if}
    <form class="flex flex-col space-y-4" on:submit|preventDefault={handleRegister}>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Email</span>
        <Input type="email" bind:value={email} placeholder="name@company.com" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Password</span>
        <Input type="password" bind:value={password} placeholder="•••••" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Confirm Password</span>
        <Input type="password" bind:value={confirmPassword} placeholder="•••••" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
      </Label>
      <Button type="submit" class="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">Sign Up</Button>
    </form>
    <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-300 mt-4">
      Already have an account? <a href="/login" class="text-blue-600 hover:underline dark:text-blue-400">Login</a>
    </div>
  </Card>
</div>



<Footer />