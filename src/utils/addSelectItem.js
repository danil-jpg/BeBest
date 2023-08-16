import { v1 } from 'uuid';

export const addSelectItems = (list, payload) => {
    if (!payload || payload === null) return;

    let arr = String(payload).split(',');

    if (arr.length <= 1) {
        addItemHandler(list, arr[0]);
    } else {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i].trim();
            addItemHandler(list, item);
        }
    }
};

function addItemHandler(list, title) {
    let test = {
        id: v1(),
        title: title,
        selected: false,
    };

    if (!list.length) {
        list.push(test);
    } else {
        for (let elem of list) {
            if (elem.title === title) return false;
        }

        list.push(test);
    }
}
