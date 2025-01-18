<template>
    <div class="max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="email" class="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label for="password" class="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label for="confirmPassword" class="block mb-1">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuth } from '../composables/useAuth'
  
  const router = useRouter()
  const { register } = useAuth()
  
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const error = ref('')
  
  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      error.value = 'Passwords do not match'
      return
    }
  
    try {
      await register(email.value, password.value)
      router.push('/dashboard')
    } catch (err) {
      error.value = 'Failed to register'
    }
  }
  </script>