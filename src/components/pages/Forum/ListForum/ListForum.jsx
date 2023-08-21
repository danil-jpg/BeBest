import React from 'react';
import './ListForum.scss';
import ItemForum from '../ItemForum/ItemForum';
import Title from '../../../UI/Title/Title';

const titles = {
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
    create: 'Создана',
};

const ListForum = (props) => {
    return (
        <>
            <Title type='subtitle'>{titles.sub}</Title>
            <div className='forum'>
                <ItemForum
                    title={titles.name}
                    amount={titles.theme}
                    update={titles.update}
                    head={true}
                />
                <ItemForum
                    title='Простой метод запоминания иностранных слов'
                    amount={200}
                    update='Сегодня, 10:03'
                />
                <ItemForum
                    title='Простой метод запоминания иностранных слов'
                    amount={200}
                    update='Сегодня, 10:03'
                />
                <ItemForum
                    title='Простой метод запоминания иностранных слов'
                    amount={200}
                    update='Сегодня, 10:03'
                />
                <ItemForum
                    title='Простой метод запоминания иностранных слов'
                    amount={200}
                    update='Сегодня, 10:03'
                />
                <ItemForum
                    title={titles.name}
                    amount={titles.theme}
                    update={titles.update}
                    create={titles.create}
                    head={true}
                    topic={true}
                />
                <ItemForum
                    topic={true}
                    title='Простой метод запоминания иностранных слов'
                    author={'Иван Болдырев'}
                    lastAuthor={'Иван Болдырев'}
                    amount={200}
                    update='Сегодня, 10:03'
                    create={'16.07.2021'}
                />
            </div>
        </>
    );
};

export default ListForum;
