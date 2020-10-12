export const state = () => ({
    lanugage: "PL"
  })
  
  export const mutations = {
    swapLanguage(state) {
      state.lanugage === "PL" ? state.lanugage = "EN" : state.lanugage = "PL"
    }
  }
  