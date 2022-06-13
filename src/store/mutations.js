export default {
  addToCounter(state, payload){
    state.counter = state.counter + payload;
    state.history.push(state.counter)
  },
  subtracFromCounter(state, payload){
    state.counter = state.counter - payload;
    state.history.push(state.counter)
  }
}