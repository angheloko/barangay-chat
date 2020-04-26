export const state = () => {
  return {
    regions: []
  }
}
export const getters = {
  regions: (state) => {
    return state.regions
  }
}
export const mutations = {
  getRegions (state, regions) {
    state.regions = regions
  }
}
export const actions = {
  getRegions ({ commit }) {
    const regions = []
    const db = this.$firebase.firestore()
    db.collection('regions').orderBy('name').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          regions.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id
          })
        })
        commit('getRegions', regions)
      })
  }
}
