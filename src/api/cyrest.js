import { METHOD_GET, METHOD_POST } from './apiConstants'

const CYREST_BASE_URL = 'http://127.0.0.1'



const cyNDExStatus = cyRESTPort => {
  const cyNDExStatusUrl =
    CYREST_BASE_URL + ':' + cyRESTPort + '/cyndex2/v1/status'

  return fetch(cyNDExStatusUrl, {
    method: METHOD_GET
  })
}

const importNetwork = (cyRESTPort, payload) => {
  const importNetworkUrl =
    CYREST_BASE_URL + ':' + cyRESTPort + '/cyndex2/v1/networks/cx'
  console.log('Calling CyREST POST:', importNetworkUrl)

  return fetch(importNetworkUrl, {
    method: METHOD_POST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
}

const cyndex2Networks = (cyRESTPort, method, suid, payload) => {
  const currentNetworkUrl =
    CYREST_BASE_URL + ':' + cyRESTPort + '/cyndex2/v1/networks/' + suid
  console.log('Calling CyREST getNetwork:', currentNetworkUrl, method, payload)
  return fetch(currentNetworkUrl, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: payload
  })
}

export { cyNDExStatus, importNetwork, cyndex2Networks }
