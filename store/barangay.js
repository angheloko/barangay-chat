export const state = () => {
  return {
    barangays: {}
  }
}
export const getters = {
  barangays: state => (regionId, provinceId, municipalityId) => {
    if (state.barangays[regionId]) {
      if (state.barangays[regionId][provinceId]) {
        if (state.barangays[regionId][provinceId][municipalityId]) {
          return state.barangays[regionId][provinceId][municipalityId]
        }
      }
    }
    return []
  }
}
export const mutations = {
  getBarangays (state, { regionId, provinceId, municipalityId, barangays }) {
    if (state.barangays[regionId] === undefined) {
      state.barangays[regionId] = {}
    }
    if (state.barangays[regionId][provinceId] === undefined) {
      state.barangays[regionId][provinceId] = {}
    }
    state.barangays[regionId][provinceId][municipalityId] = barangays
  }
}
export const actions = {
  getBarangays ({ commit }, { regionId, provinceId, municipalityId }) {
    const barangays = []
    const db = this.$firebase.firestore()

    return db.collection('barangays')
      .where('regionId', '==', regionId)
      .where('provinceId', '==', provinceId)
      .where('municipalityId', '==', municipalityId)
      .orderBy('name')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          barangays.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id
          })
        })
        commit('getBarangays', { regionId, provinceId, municipalityId, barangays })
      })
  }
}
