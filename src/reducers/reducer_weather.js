import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // we want to ADD TO EXISTING CITIES collection, not keep replacing with one last
        // searched city TLDR -> we want to collect cities & their data
        // DO NOT ALTER STATE DIRECTLY!! =>

        // state.push([ action.payload.data ])

        // concat will return a brand new array, not a mutated old one: 
        // return state.concat([ action.payload.data ]);   SAME AS:
        if(action.payload.data != null) {
            return [ action.payload.data, ...state ];
        }
    }
    return state;
}