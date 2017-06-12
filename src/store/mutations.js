import * as types from './mutationTypes'

// Mutations
const mutations = {
  [types.TREE_LIST_FETCH_REQUEST] (state, { fetching }) {
    state.treeList = []
    state.fetching = fetching
    state.currentView = state.route.path.split('/')[1]
  },
  [types.TREE_LIST_FETCH_SUCCESS] (state, { trees }) {
    state.treeList = trees
    state.fetching = false
    state.currentImage = state.route.params.id
  },
  [types.TREE_LIST_FETCH_FAILURE] (state, { error }) {
    state.error = error
    state.fetching = false
  },
  [types.TREE_LIST_FOUND_EXISTING] (state) {
    state.currentView = state.route.path.split('/')[1]
    state.currentImage = state.route.params.id
  },
  [types.LAKE_LIST_FETCH_REQUEST] (state, { fetching }) {
    state.lakeList = []
    state.fetching = fetching
    state.currentView = state.route.path.split('/')[1]
  },
  [types.LAKE_LIST_FETCH_SUCCESS] (state, { lakes }) {
    state.lakeList = lakes
    state.fetching = false
    state.currentImage = state.route.params.id
  },
  [types.LAKE_LIST_FETCH_FAILURE] (state, { error }) {
    state.error = error
    state.fetching = false
  },
  [types.LAKE_LIST_FOUND_EXISTING] (state) {
    state.currentView = state.route.path.split('/')[1]
    state.currentImage = state.route.params.id
  },
  [types.OPEN_IMAGE] (state, { id }) {
    state.currentImage = id
  },
  [types.CLOSE_IMAGE] (state) {
    state.currentImage = ''
  },
  [types.OPEN_NOTIFICATION] (state) {
    state.notificationOpen = true
  },
  [types.CLOSE_NOTIFICATION] (state) {
    state.notificationOpen = false
  }
}

export default mutations
