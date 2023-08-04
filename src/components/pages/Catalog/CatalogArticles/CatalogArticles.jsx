import React, { useEffect, useState } from 'react';
import './CatalogArticles.scss';
import axios from 'axios';
import ContainerMain from '../../../common/ContainerMain/ContainerMain';
import Title from '../../../UI/Title/Title';
import ArticleCard from '../../../common/ArticleCard/ArticleCard';

const data = {
    title: 'Список преподавателей',
    titleArticles: 'Полезные статьи',
};

const CatalogArticles = (props) => {
    const [state, setState] = useState();

    useEffect(() => {
        const urlApi = 'http://bebest.pp.ua/api/articles/?populate=*';
        axios
            .get(urlApi)
            .then(async (response) => {
                const res = await response.data.data;
                setState([...res]);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [setState]);
    console.log(state);
    return (
        <div className='articles-catalog'>
            <ContainerMain>
                <Title align={'center'}>{data.titleArticles}</Title>
                <ul className='articles-catalog__list'>
                    {state?.map((el) => (
                        <ArticleCard
                            key={el.id}
                            image={el.attributes.image.data.attributes.url}
                            title={el.attributes.title}
                            text={el.attributes.text}
                        />
                    ))}
                </ul>
            </ContainerMain>
        </div>
    );
};

export default CatalogArticles;
