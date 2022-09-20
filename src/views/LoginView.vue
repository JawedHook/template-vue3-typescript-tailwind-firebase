<template>
  <div class="bg-zinc-800 min-h-screen flex items-center justify-center">
    <button class="rounded bg-zinc-700 px-3 py-2 text-white" @click="signInWithGoogle">
      Sign in with Google
    </button>
  </div>
</template>

<script setup lang="ts">
  import router from '../router';
  import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

  const signInWithGoogle = (): void => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then(() => {
        router.push('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>
