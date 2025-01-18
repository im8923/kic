import { ref, computed } from 'vue'

const user = ref(null)

export function useAuth() {
  const isLoggedIn = computed(() => !!user.value)

  const login = async (email, password) => {
    // In a real app, you would make an API call here
    // For this example, we'll just simulate a successful login
    user.value = { email }
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  const register = async (email, password) => {
    // In a real app, you would make an API call here
    // For this example, we'll just simulate a successful registration
    user.value = { email }
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  const checkAuth = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  return {
    user,
    isLoggedIn,
    login,
    register,
    logout,
    checkAuth
  }
}