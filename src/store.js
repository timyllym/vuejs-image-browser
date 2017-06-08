import Vue from 'vue'
import Vuex from 'vuex'
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

// Initial state
const state = {
  currentImage: '',
  trees: [],
  lakes: [],
  error: '',
  fetching: false
}

// Getters
const getters = {
  treeList: state => state.trees,
  lakeList: state => state.lakes
}

// Actions
const actions = {
  getTreeList ({ commit }) {
    commit(TREE_LIST_FETCH_REQUEST, { fetching: true })
    api.fetchTreeList()
      .then((response) => {
        if (response.status !== 200) {
          commit(TREE_LIST_FETCH_FAILURE, { 'error': 'Error: ' + response.statusText })
        } else {
          return response.json()
            .then((result) => {
              if (result.images) {
                commit(TREE_LIST_FETCH_SUCCESS, { trees: result.images })
              } else {
                commit(TREE_LIST_FETCH_FAILURE, { 'error': 'No images' })
              }
            });
        }
      })
  },
  getLakeList ({ commit }) {
    commit(LAKE_LIST_FETCH_REQUEST, { fetching: true })
    api.fetchLakeList()
      .then((response) => {
        if (response.status !== 200) {
          commit(LAKE_LIST_FETCH_FAILURE, { 'error': 'Error: ' + response.statusText })
        } else {
          return response.json()
            .then((result) => {
              if (result.images) {
                commit(LAKE_LIST_FETCH_SUCCESS, { trees: result.images })
              } else {
                commit(LAKE_LIST_FETCH_FAILURE, { 'error': 'No images' })
              }
            });
        }
      })
  }
}

// Mutations
const mutations = {
  [TREE_LIST_FETCH_REQUEST] (state, { fetching }) {
    state.trees = []
    state.fetching = fetching
  },
  [TREE_LIST_FETCH_SUCCESS] (state, { trees }) {
    state.trees = trees
    state.fetching = false
  },
  [TREE_LIST_FETCH_FAILURE] (state, { error }) {
    state.error = error
    state.fetching = false
  },
  [LAKE_LIST_FETCH_REQUEST] (state, { fetching }) {
    state.lakes = []
    state.fetching = fetching
  },
  [LAKE_LIST_FETCH_SUCCESS] (state, { trees }) {
    state.lakes = trees
    state.fetching = false
  },
  [LAKE_LIST_FETCH_FAILURE] (state, { error }) {
    state.error = error
    state.fetching = false
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
