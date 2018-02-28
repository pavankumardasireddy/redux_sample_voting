const initialState = {
  janasena: 0,
  tdp: 0,
  congress: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_JANASENA':
      console.log("Vote JANASENA!");
      return Object.assign({}, state, {
        janasena: state.janasena + 1
      })
    case 'VOTE_TDP':
      console.log("Vote Tdp!");
      return Object.assign({}, state, {
        tdp: state.tdp + 1
      })
    case 'VOTE_CONGRESS':
      console.log("Vote Congress!");
      return Object.assign({}, state, {
        congress: state.congress + 1
      })
    default:
      return state
  }
}
