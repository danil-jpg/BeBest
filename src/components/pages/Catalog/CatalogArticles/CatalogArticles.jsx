import React, { useEffect, useState } from 'react';
import './CatalogArticles.scss';
import axios from 'axios';
import ContainerMain from '../../../common/ContainerMain/ContainerMain';
import Title from '../../../UI/Title/Title';
import ArticleCard from '../../../common/ArticleCard/ArticleCard';
import Picture from '../../../UI/Picture/Picture';
import imgBgLeft from '../../../../assets/images/catalog/article-bg_left.png';
import imgBgLeftWebp from '../../../../assets/images/catalog/article-bg_left.png?as=webp';
import imgBgRight from '../../../../assets/images/catalog/article-bg_right.png';
import imgBgRightWebp from '../../../../assets/images/catalog/article-bg_right.png?as=webp';

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
    return (
        <div className='articles-catalog'>
            <ContainerMain style={{ position: 'relative' }}>
                <Title
                    align={'center'}
                    style={{
                        position: 'relative',
                        zIndex: '1',
                        margin: '0 0 35px',
                    }}
                >
                    {data.titleArticles}
                </Title>
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

                <Picture
                    img={imgBgLeft}
                    webp={imgBgLeftWebp}
                    className='articles-catalog__image-bg articles-catalog__image-bg_left'
                />
                <Picture
                    img={imgBgRight}
                    webp={imgBgRightWebp}
                    className='articles-catalog__image-bg articles-catalog__image-bg_right'
                />
            </ContainerMain>
        </div>
    );
};

export default CatalogArticles;
