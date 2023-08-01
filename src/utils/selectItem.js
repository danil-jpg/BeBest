export const selectItem = (state, action, arr) => {
    state.arr.forEach((el) => {
        if (el.id === action.payload) {
            el.selected = true;
        } else {
            el.selected = false;
        }
    });
};
