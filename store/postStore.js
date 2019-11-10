export const state = () => ({
  posts: []
})

export const mutations = {
  update(state, posts) {
    state.posts = posts
  }
}

export const getters = {
  getPost(state) {
    return state.posts
  }
}
