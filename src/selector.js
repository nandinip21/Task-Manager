import { createSelector } from "reselect";

export const memoizedSelector=createSelector((state)=>state.get("tasks"),
    (object)=>{
        return object
    }
)
