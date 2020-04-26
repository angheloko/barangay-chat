export const state = () => {
  return {
    token: null,
    user: null
  }
}
export const getters = {
  isAuthenticated: (state) => {
    return !!state.token
  },
  user: (state) => {
    return state.user
  }
}
export const mutations = {
  signIn (state, { user, token }) {
    state.token = token
    state.user = user
  },
  signOut (state) {
    state.token = null
    state.user = null
  }
}
export const actions = {
  signIn ({ commit, dispatch }, user) {
    console.log('Signing in user')
    user.getIdToken().then((token) => {
      commit('signIn', {
        token,
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      })

      const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5 days.
      document.cookie = 'token=' + token + ';path=/;max-age=' + expiresIn
    }, (error) => {
      console.error('Error getting ID token.', error)
      dispatch('signOut')
    })
  },
  signOut ({ commit }) {
    console.log('Signing out user')
    commit('signOut')
    document.cookie = 'token=;path=/;expires=0'
  }
}
