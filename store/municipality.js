export const state = () => {
  return {
    municipalities: {}
  }
}
export const getters = {
  municipalities: state => (regionId, provinceId) => {
    if (state.municipalities[regionId]) {
      if (state.municipalities[regionId][provinceId]) {
        return state.municipalities[regionId][provinceId]
      }
    }
    return []
  }
}
export const mutations = {
  getMunicipalities (state, { regionId, provinceId, municipalities }) {
    if (state.municipalities[regionId] === undefined) {
      state.municipalities[regionId] = {}
    }
    state.municipalities[regionId][provinceId] = municipalities
  }
}
export const actions = {
  getMunicipalities ({ commit }, { regionId, provinceId }) {
    const municipalities = []
    const db = this.$firebase.firestore()

    return db.collection('municipalities')
      .where('regionId', '==', regionId)
      .where('provinceId', '==', provinceId)
      .orderBy('name')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          municipalities.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id
          })
        })
        commit('getMunicipalities', { regionId, provinceId, municipalities })
      })
  }
}
