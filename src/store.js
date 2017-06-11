import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes'
import * as api from './api'

Vue.use(Vuex)

// Constants
const TREE_LIST_FETCH_REQUEST = 'TREE_LIST_FETCH_REQUEST'
const TREE_LIST_FETCH_SUCCESS = 'TREE_LIST_FETCH_SUCCESS'
const TREE_LIST_FETCH_FAILURE = 'TREE_LIST_FETCH_FAILURE'
const LAKE_LIST_FETCH_REQUEST = 'LAKE_LIST_FETCH_REQUEST'
const LAKE_LIST_FETCH_SUCCESS = 'LAKE_LIST_FETCH_SUCCESS'
const LAKE_LIST_FETCH_FAILURE = 'LAKE_LIST_FETCH_FAILURE'
const OPEN_IMAGE = 'OPEN_IMAGE'
const CLOSE_IMAGE = 'CLOSE_IMAGE'
const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION'
const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'

// Initial state
const state = {
  currentView: '',
  currentImage: '',
  imageList: [],
  error: '',
  notificationOpen: false,
  fetching: false
}

// Getters
const getters = {
  imageList: state => state.imageList,
  currentImage: state => state.route.params.id,
  currentImageURL: state => {
    if (state.imageList.length > 0 && state.route.params.id) {
      if (state.imageList.find(item => String(item.id) === state.route.params.id)) {
        return state.imageList.find(item => String(item.id) === state.route.params.id).url
      }
    }
    return ''
  },
  error: state => state.error,
  notificationOpen: state => state.notificationOpen
}

// Actions
const actions = {
  getTreeList ({ commit }) {
    commit(TREE_LIST_FETCH_REQUEST, { fetching: true })
    api.fetchTreeList()
      .then((response) => {
        if (response.status !== 200) {
          commit(TREE_LIST_FETCH_FAILURE, { 'error': response.statusText })
          commit(OPEN_NOTIFICATION)
        } else {
          return response.json()
            .then((result) => {
              if (result.images) {
                commit(TREE_LIST_FETCH_SUCCESS, { trees: result.images })
              } else {
                commit(TREE_LIST_FETCH_FAILURE, { 'error': 'No images' })
                commit(OPEN_NOTIFICATION)
              }
            });
        }
      })
      .catch((error) => {
          commit(TREE_LIST_FETCH_FAILURE, { 'error': String(error) })
          commit(OPEN_NOTIFICATION)
      })
  },
  getLakeList ({ commit }) {
    commit(LAKE_LIST_FETCH_REQUEST, { fetching: true })
    api.fetchLakeList()
      .then((response) => {
        if (response.status !== 200) {
          commit(LAKE_LIST_FETCH_FAILURE, { 'error': response.statusText })
          commit(OPEN_NOTIFICATION)
        } else {
          return response.json()
            .then((result) => {
              if (result.images) {
                commit(LAKE_LIST_FETCH_SUCCESS, { lakes: result.images })
              } else {
                commit(LAKE_LIST_FETCH_FAILURE, { 'error': 'No images' })
                commit(OPEN_NOTIFICATION)
              }
            });
        }
      })
      .catch((error) => {
          commit(LAKE_LIST_FETCH_FAILURE, { 'error': String(error) })
          commit(OPEN_NOTIFICATION)
      })
  },
  openImage ({ commit, state }, image) {
    commit(OPEN_IMAGE, {
      id: image.id
    })
    router.push(`/${state.currentView}/image/${image.id}`)
  },
  closeImage ({ commit, state }) {
    commit(CLOSE_IMAGE)
    router.push(`/${state.currentView}`)
  },
  openNotification ({ commit }) {
    commit(OPEN_NOTIFICATION)
  },
  closeNotification ({ commit }) {
    commit(CLOSE_NOTIFICATION)
  }
}

// Mutations
const mutations = {
  [TREE_LIST_FETCH_REQUEST] (state, { fetching }) {
    state.imageList = []
    state.fetching = fetching
    state.currentView = state.route.path.split('/')[1]
  },
  [TREE_LIST_FETCH_SUCCESS] (state, { trees }) {
    state.imageList = trees
    state.fetching = false
    state.currentImage = state.route.params.id
  },
  [TREE_LIST_FETCH_FAILURE] (state, { error }) {
    state.error = error
    state.fetching = false
  },
  [LAKE_LIST_FETCH_REQUEST] (state, { fetching }) {
    state.imageList = []
    state.fetching = fetching
    state.currentView = state.route.path.split('/')[1]
  },
  [LAKE_LIST_FETCH_SUCCESS] (state, { lakes }) {
    state.imageList = lakes
    state.fetching = false
    state.currentImage = state.route.params.id
  },
  [LAKE_LIST_FETCH_FAILURE] (state, { error }) {
    state.error = error
    state.fetching = false
  },
  [OPEN_IMAGE] (state, { id }) {
    state.currentImage = id
  },
  [CLOSE_IMAGE] (state) {
    state.currentImage = ''
  },
  [OPEN_NOTIFICATION] (state) {
    state.notificationOpen = true
  },
  [CLOSE_NOTIFICATION] (state) {
    state.notificationOpen = false
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
