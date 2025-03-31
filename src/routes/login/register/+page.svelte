<script lang="ts">
  import { Card, Button, Label, Input } from 'flowbite-svelte';
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let registrationSuccess = false;
  let email = '';
  let nickname = '';
  let password = '';
  let confirmPassword = '';
  let jmeno = '';
  let prijmeni = '';
  let notification = '';

  // Funkce pro validaci hesla
  function validatePassword(password: string) {
    const errors = [];
    if (!/[A-Z]/.test(password)) {
      errors.push('The password must contain at least one uppercase letter.');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('The password must contain at least one number.');
    }
    if (password.length < 8) {
      errors.push('The password must be at least 8 characters long.');
    }
    return errors;
  }

  // Funkce pro registraci uživatele
  async function register() {
    notification = '';

    if (password !== confirmPassword) {
      notification = 'Passwords do not match.';
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      notification = passwordErrors.join(' ');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('nickname', nickname);
    formData.append('password', password);
    formData.append('jmeno', jmeno);
    formData.append('prijmeni', prijmeni);

    try {
      // Změněná URL na správný endpoint v SvelteKit
      // Opravená URL pro odesílání formuláře
      const response = await fetch('/login/register', {
        method: 'POST',
        body: formData,
      });


      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server Error: ${text}`);
      }

      const result = await response.json();
      registrationSuccess = result.success;
      notification = result.message;
    } catch (error) {
      console.error('Error during registration:', error);
      notification = 'Failed to connect to the server.';
    }
  }
</script>

<Header />

<div class="flex justify-center items-center mt-30 min-h-screen px-4 sm:px-6 lg:px-8">
  <Card class="w-full max-w-md p-6 shadow-2xl border border-gray-300 dark:border-gray-700 rounded-lg">
    <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>
    <form class="flex flex-col space-y-4" on:submit|preventDefault={register}>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Jméno</span>
        <Input type="text" bind:value={jmeno} placeholder="Zadejte vaše jméno" required />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Přijmení</span>
        <Input type="text" bind:value={prijmeni} placeholder="Zadejte vaše přijmení" required />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Název Firmy</span>
        <Input type="text" bind:value={nickname} placeholder="Zadejte název firmy" required />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Email</span>
        <Input type="email" bind:value={email} placeholder="name@company.com" required />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Password</span>
        <Input type="password" bind:value={password} placeholder="•••••" required />
      </Label>
      <Label>
        <span class="text-gray-700 dark:text-gray-300">Confirm Password</span>
        <Input type="password" bind:value={confirmPassword} placeholder="•••••" required />
      </Label>
      <Button type="submit" class="w-full py-3 bg-slate-500 text-white hover:bg-slate-950 rounded-md transition-all">Sign Up</Button>
    </form>
    <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-300 mt-4">
      Already have an account? <a href="/login" class="text-gray-800 hover:underline dark:text-gray-400">Login</a>
    </div>
  </Card>
</div>

{#if notification}
  <p class="text-center mt-4 text-red-500">{notification}</p>
{/if}

{#if registrationSuccess}
  <p class="text-center mt-4 text-green-500">Registration successful! Check your email to verify your account.</p>
{/if}

<Footer />
