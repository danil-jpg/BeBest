export const updateListSelection = (list, payload) => {
    return list.map((el) => ({
        ...el,
        selected: el.id === payload,
    }));
};
