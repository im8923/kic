<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to your dashboard, {{ user.email }}!</p>
      <p>This is a protected route that only authenticated users can access.</p>
    </div>
  </template>
  
  <script setup>
  import { useAuth } from '../composables/useAuth'
  
  const { user } = useAuth()
  </script>