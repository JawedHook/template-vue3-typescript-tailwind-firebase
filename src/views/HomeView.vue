<template>
  <div class="bg-slate-800 min-h-screen flex items-center justify-center">
    <button class="rounded bg-zinc-700 px-3 py-2 text-white" @click="handleSignOut">
      Sign out
    </button>
  </div>
</template>

<script lang="ts" setup>
  import router from '../router';
  import { signOut, Auth, getAuth } from 'firebase/auth';

  let auth: Auth;
  const handleSignOut = async (): Promise<void> => {
    auth = getAuth();
    await signOut(auth);
    router.push('/');
  };
</script>
