import { v1 } from 'uuid';

export const updateListSelection = (list, payload) => {
    return list.map((el) => ({
        ...el,
        selected: el.id === payload,
    }));
};

export const updateListSelectionProfile = (list, payload) => {
    let lists = [...list];
    let current = [];

    for (let list of lists) {
        list.forEach(el => {
            if (el.id === payload) {
                current = [...list];
            }
        })

        current.forEach(el => {
            el.selected = el.id === payload;
        })
    }
};

export const addListSelectionProfile = (lists) => {
    let list = [...lists[0]];

    if (lists.length === list.length) {
        alert('АСТАНАВИТЕСЬ!!!');
        return
    }

    let newList = list.map(el => {
        return {
            ...el,
            id: v1()
        }
    });

    lists.push(newList);
}
// selectLessonLangSpeak: (state, action) => {
//     let lists = [...state.lessonLangSpeak.lists];
//     let current = [];

//     for (let list of lists) {
//         list.forEach(el => {
//             if (el.id === action.payload) {
//                 current = [...list];
//             }
//         })

//         current.forEach(el => {
//             el.selected = el.id === action.payload;
//         })
//     }
// }