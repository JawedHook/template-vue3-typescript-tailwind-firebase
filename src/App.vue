<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, Ref } from 'vue';
  import { getAuth, Auth, onAuthStateChanged } from 'firebase/auth';

  const isLoggedIn: Ref<boolean> = ref(false);

  let auth: Auth;

  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      user ? (isLoggedIn.value = true) : (isLoggedIn.value = false);
      console.log(user);
    });
  });
</script>
