import modelExtend from 'dva-model-extend'

const model = {
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const pageModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0,
      pageSize: 10,
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
    showError (state) {
      return {
        ...state,
        errorVisible: false,
      }
    },
    hideError (state) {
      return {
        ...state,
        errorVisible: false,
      }
    },
    //  设置state中的某个值
    setData (state, { payload }) {
      let { key, value } = payload
      return {
        ...state,
        [key]: value,
      }
    },
    //  设置state中的多个属性
    setPayload (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },

})


module.exports = {
  model,
  pageModel,
}
