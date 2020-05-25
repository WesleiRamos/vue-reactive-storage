const makeStorage = require('./make-storage')
const makeMixin = require('./make-mixin')

const install = (Vue, schema, { dataKey = 'db', storage = 'local' }) => {
  const store = makeStorage(schema, storage)
  Vue.mixin(makeMixin(store, dataKey))
}

module.exports = { install }
