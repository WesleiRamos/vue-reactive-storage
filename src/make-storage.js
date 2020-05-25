const engine = require('store/src/store-engine')

/**
 * @typedef Store
 * @property {StoreJsAPI} store
 * @property {Object}     fields
 */

/**
 * @param {String} storage
 */
const getStorage = (storage) => [ require(`store/storages/${storage}Storage`) ]

/**
 * @param {Objcet} schema
 * @param {'local' | 'session'} storage
 * @returns {Store}
 */
module.exports = (schema, storage) => {
  const store = engine.createStore(getStorage(storage), [])
  const fields = Object.entries(schema).reduce((acc, [ key, value ]) => ({
    [key]: store.get(key) || value, ...acc
  }), {})

  return { store, fields }
}
