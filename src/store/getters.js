// Getters
const getters = {
  treeList: state => state.treeList,
  lakeList: state => state.lakeList,
  currentImage: state => state.route.params.id,
  currentImageURL: state => {
    let imageList = state.currentView === 'trees' ? state.treeList : state.lakeList
    if (imageList.length > 0 && state.route.params.id) {
      if (imageList.find(item => String(item.id) === state.route.params.id)) {
        return imageList.find(item => String(item.id) === state.route.params.id).url
      }
    }
    return ''
  },
  error: state => state.error,
  notificationOpen: state => state.notificationOpen
}

export default getters
