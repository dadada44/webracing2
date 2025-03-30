<script>
    import { Card, Button, Label, Input } from 'flowbite-svelte';
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    let email = "";
    let message = "";
    
    async function handleReset() {
      const res = await fetch("/reset-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      message = res.ok ? "Check your email for reset link!" : data.error;
    }
</script>

<Header />

<div class="flex justify-center items-center mt-20 min-h-screen px-4 sm:px-6 lg:px-8">
    <Card class="w-full max-w-md p-6 shadow-2xl border border-gray-300 dark:border-gray-700 rounded-lg">
        <form class="flex flex-col space-y-6" on:submit|preventDefault={handleReset}>
            <h3 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Reset Password</h3>
            {#if message}
                <p class="text-green-500 text-center">{message}</p>
            {/if}
            <Label class="space-y-2">
                <span class="text-gray-700 dark:text-gray-300">Email</span>
                <Input type="email" bind:value={email} placeholder="Enter your email" required class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </Label>
            <Button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Send Reset Link</Button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                <a href="/login" class="text-blue-600 hover:underline dark:text-blue-400">Back to Login</a>
            </div>
        </form>
    </Card>
</div>


<Footer />