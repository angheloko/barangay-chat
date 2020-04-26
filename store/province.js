export const state = () => {
  return {
    provinces: {}
  }
}
export const getters = {
  provinces: state => (regionId) => {
    return state.provinces[regionId] ? state.provinces[regionId] : []
  }
}
export const mutations = {
  getProvinces (state, { regionId, provinces }) {
    state.provinces[regionId] = provinces
  }
}
export const actions = {
  getProvinces ({ commit }, regionId) {
    const provinces = []
    const db = this.$firebase.firestore()

    return db.collection('provinces')
      .where('regionId', '==', regionId)
      .orderBy('name')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          provinces.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id
          })
        })
        commit('getProvinces', { regionId, provinces })
      })
  }
}
