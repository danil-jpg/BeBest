export const isActive = (el, selector) => (el ? selector : '');

export const isChecked = (el, value, selector) =>
    el === value ? selector : '';

export const getImage = (src) => `http://bebest.pp.ua${src}`;

export const getUser = (el, user) => {
    let list = [...el.users].filter(el => el.username !== user.username);
    return list[0];
}