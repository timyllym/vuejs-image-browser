export function fetchTreeList () {
  return fetch('http://www.splashbase.co/api/v1/images/search?query=tree', {
    method: 'GET'
  });
}

export function fetchLakeList () {
  return fetch('http://www.splashbase.co/api/v1/images/search?query=lake', {
    method: 'GET'
  });
}
