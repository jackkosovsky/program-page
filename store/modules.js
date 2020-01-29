export const state = () => ({
  modules: []
})

export const mutations = {
  setModules(state, modules) {
    state.modules = modules
  }
}

export const actions = {
  async fetch({commit}) {
    const modules = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setModules', modules)
  }
}

export const getters = {
  modules: state => state.modules,
  // usersLength: (state, getters) => {
  //   return state.tags.length
  // },
  usersLength(state, getters) {
    return state.modules.length
  }

}
