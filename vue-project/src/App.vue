<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold text-gray-800">Auth App</router-link>
        <div v-if="isLoggedIn">
          <span class="mr-4">Welcome, {{ user.email }}</span>
          <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
        <div v-else>
          <router-link to="/login" class="text-gray-600 hover:text-gray-800 mr-4">Login</router-link>
          <router-link to="/register" class="text-gray-600 hover:text-gray-800">Register</router-link>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8 flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from './composables/useAuth'

const router = useRouter()
const { user, isLoggedIn, logout } = useAuth()

const handleLogout = async () => {
  await logout()
  router.push('/login')
}
</script>