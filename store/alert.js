export const state = () => ({
  message: '',
  type: 'success'
})

export const mutations = {
  setAlert(state, alert) {
    state.message = alert.message
    state.type = alert.type
  }
}
