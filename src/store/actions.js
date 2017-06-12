import router from '../routes'
import * as api from '../api'
import * as types from './mutationTypes'

// Actions
const actions = {
  getTreeList ({ commit, state }) {
    if (state.treeList.length === 0) {
        commit(types.TREE_LIST_FETCH_REQUEST, { fetching: true })
        api.fetchTreeList()
          .then((response) => {
            if (response.status !== 200) {
              commit(types.TREE_LIST_FETCH_FAILURE, { 'error': response.statusText })
              commit(types.OPEN_NOTIFICATION)
            } else {
              return response.json()
                .then((result) => {
                  if (result.images) {
                    commit(types.TREE_LIST_FETCH_SUCCESS, { trees: result.images })
                  } else {
                    commit(types.TREE_LIST_FETCH_FAILURE, { 'error': 'No images' })
                    commit(types.OPEN_NOTIFICATION)
                  }
                });
            }
          })
          .catch((error) => {
              commit(types.TREE_LIST_FETCH_FAILURE, { 'error': String(error) })
              commit(types.OPEN_NOTIFICATION)
          })
      } else {
          commit(types.TREE_LIST_FOUND_EXISTING)
      }
  },
  getLakeList ({ commit, state }) {
    if (state.lakeList.length === 0) {
        commit(types.LAKE_LIST_FETCH_REQUEST, { fetching: true })
        api.fetchLakeList()
          .then((response) => {
            if (response.status !== 200) {
              commit(types.LAKE_LIST_FETCH_FAILURE, { 'error': response.statusText })
              commit(types.OPEN_NOTIFICATION)
            } else {
              return response.json()
                .then((result) => {
                  if (result.images) {
                    commit(types.LAKE_LIST_FETCH_SUCCESS, { lakes: result.images })
                  } else {
                    commit(types.LAKE_LIST_FETCH_FAILURE, { 'error': 'No images' })
                    commit(types.OPEN_NOTIFICATION)
                  }
                });
            }
          })
          .catch((error) => {
              commit(types.LAKE_LIST_FETCH_FAILURE, { 'error': String(error) })
              commit(types.OPEN_NOTIFICATION)
          })
      } else {
          commit(types.LAKE_LIST_FOUND_EXISTING)
      }
  },
  openImage ({ commit, state }, image) {
    commit(types.OPEN_IMAGE, {
      id: image.id
    })
    router.push(`/${state.currentView}/image/${image.id}`)
  },
  closeImage ({ commit, state }) {
    commit(types.CLOSE_IMAGE)
    router.push(`/${state.currentView}`)
  },
  openNotification ({ commit }) {
    commit(types.OPEN_NOTIFICATION)
  },
  closeNotification ({ commit }) {
    commit(types.CLOSE_NOTIFICATION)
  }
}

export default actions
