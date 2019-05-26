export const getDownloadsDir = state => { return state.settings.getIn(['data', 'downloadsDir']) }
export const getIsInitialized = state => { return state.settings.get('isInitialized') }
export const getData = state => { return state.settings.get('data') }
export const getIsResetting = state => { return state.settings.get('isResetting') }
