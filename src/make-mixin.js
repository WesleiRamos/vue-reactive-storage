/**
 * @param {Store}  storage
 * @param {string} dataKey
 */
const makeWatchers = ({ store, fields }, dataKey) => Object.keys(fields).reduce((acc, key) => ({
  [`${dataKey}.${key}`]: {
    handler: value => store.set(key, value)
  },
  ...acc
}), {})

/**
 * @param {Store}  storage
 * @param {String} dataKey
 */
module.exports = (storage, dataKey) => ({
  data: () => ({
    [dataKey]: storage.fields
  }),

  watch: makeWatchers(storage, dataKey)
})
