<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Card, Button, Label, Input } from 'flowbite-svelte';
    
    let loginSuccess = false;
    let notification = '';
    let nickname = '';
    let password = '';
    let rememberMe = false; // Stav pro "Zapamatovat si mě"

    async function login(event) {
      event.preventDefault();
      notification = '';

      const formData = new FormData();
      formData.append('nickname', nickname);
      formData.append('password', password);
      formData.append('rememberMe', rememberMe ? 'true' : 'false'); // Přidáme hodnotu pro "Zapamatovat si mě"

      try {
        const response = await fetch('/login', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            loginSuccess = true;
            setTimeout(() => {
              goto('/profile');
            }, 1000);
          } else if (result.message === 'Please verify your email before logging in.') {
            notification = 'The email has not been verified yet. Please verify it before logging in.';
          } else {
            notification = result.message;
          }
        } else {
          const errorResult = await response.json();
          notification = errorResult.message;
        }
      } catch (error) {
        notification = 'An unexpected error occurred. Please try again later.';
        console.error(error);
      }
    }
</script>

<Header />

<div class="flex justify-center mt-20 items-center min-h-screen px-4 sm:px-6 lg:px-8">
    <Card class="w-full max-w-md p-6 shadow-2xl border border-gray-300 dark:border-gray-700 rounded-lg">
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
      <form class="flex flex-col space-y-4" on:submit={login}>
        <Label>
          <span class="text-gray-700 dark:text-gray-300">Název Firmy</span>
          <Input type="text" bind:value={nickname} placeholder="Název firmy" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        </Label>
        <Label>
          <span class="text-gray-700 dark:text-gray-300">Password</span>
          <Input type="password" bind:value={password} placeholder="•••••" required class="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300" />
        </Label>
        <div>
          <input type="checkbox" bind:checked={rememberMe} />
          <span>Remember me</span>
        </div>
        <Button type="submit" class="w-full py-3bg bg-slate-500 text-white hover:bg-slate-950 rounded-md transition-all">Login</Button>
      </form>
      <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-300 mt-4">
        Not registered? <a href="/login/register" class="text-gray-800 hover:underline dark:text-blue-400">Create an account</a>
      </div>
        {#if notification}
          <div class="notification">{notification}</div>
        {/if}
    </Card>
  </div>
  
  

<Footer />