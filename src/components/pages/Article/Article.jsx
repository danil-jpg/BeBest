import React, { useState } from 'react';
import './Article.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import TeacherQuotes from '../Teachers/TeacherQuotes/TeacherQuotes';
import Picture from '../../UI/Picture/Picture';
import quotes from '../../../assets/images/teacher/quote.png';
import quotesWebp from '../../../assets/images/teacher/quote.png?as=webp';
import pic from '../../../assets/images/article/pic.png';
import picW from '../../../assets/images/article/pic.png?as=webp';
import teacher from '../../../assets/images/article/teacher.png';
import teacherW from '../../../assets/images/article/teacher.png?as=webp';
import working from '../../../assets/images/article/working.png';
import workingW from '../../../assets/images/article/working.png?as=webp';
import goal from '../../../assets/images/article/goal.png';
import goalW from '../../../assets/images/article/goal.png?as=webp';
import importantSign from '../../../assets/icons/important.svg';
import TeacherCalendar from '../Teachers/TeacherCalendar/TeacherCalendar';
import PopularCourse from '../Home/PopularCourse/PopularCourse';

const Article = () => {
    const [tab, setTab] = useState([false, true]);
    const [tab2, setTab2] = useState([true, false, false]);

    const revertedText = ` Укрепление и развитие структуры позволяет выполнять важные задания
    по разработке системы обучения кадров, соответствует насущным
    потребностям. По своей сути рыбатекст является альтернативой
    традиционному lorem ipsum, который вызывает у некторых людей
    недоумение при попытках прочитать рыбу текст. В отличии от lorem
    ipsum, текст рыба на русском языке наполнит любой макет непонятным
    смыслом и придаст неповторимый колорит советских времен. По своей
    сути рыбатекст является альтернативой традиционному lorem ipsum.
    `
        .split('')
        .reverse()
        .join('');

    return (
        <ContainerMain>
            <div className='acticle'>
                <Title>Текстовая страница</Title>
                <div className='article__body'>
                    <div>
                        <p className='date-text_sm'>28 июня 2021</p>
                        <p className='article__text article__top-text'>
                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
                            несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних
                            условиях. При создании генератора мы использовали небезизвестный
                            универсальный код речей. Текст генерируется абзацами случайным образом
                            от двух до десяти предложений в абзаце, что позволяет сделать текст
                            более привлекательным и живым для визуально-слухового восприятия.
                            <br /> По своей сути рыбатекст является альтернативой традиционному
                            lorem ipsum, который вызывает у некторых людей недоумение при попытках
                            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                            языке наполнит любой макет непонятным смыслом и придаст неповторимый
                            колорит советских времен. По своей сути рыбатекст является альтернативой
                            традиционному lorem ipsum.
                        </p>
                        <div className='article__text__quote'>
                            <div className='teacher__about_text_left'>
                                <Picture img={quotes} webp={quotesWebp} />
                            </div>
                            <div className='teacher__about_text_right'>
                                <p className='teacher__about_text'>
                                    Укрепление и развитие структуры позволяет выполнять важные
                                    задания по разработке системы обучения кадров, соответствует
                                    насущным потребностям. Таким образом реализация намеченных
                                    плановых заданий способствует подготовки и реализации модели
                                    развития. Идейные соображения высшего порядка, а также
                                    консультация с широким активом способствует подготовки и
                                    реализации модели развития.
                                </p>
                            </div>
                        </div>
                        <p className='article__subTitle'>Создание группового урока</p>
                        <p className='article__subSubTitle'>Дэн Миллман</p>
                        <p className='article__text article__descr'>
                            По своей сути рыбатекст является альтернативой традиционному lorem
                            ipsum, который вызывает у некторых людей недоумение при попытках
                            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
                            языке наполнит любой макет непонятным смыслом и придаст неповторимый
                            колорит советских времен. По своей сути рыбатекст является альтернативой
                            традиционному lorem ipsum.
                        </p>
                        <div className='article__middle-text'>
                            <div className='article__middle-text_left'>
                                <p className='article__subTitle_mid'>
                                    Курс создания программного обеспечения
                                </p>
                                <p className='article__subTitle_sm'>Образование</p>
                                <p className='article__text article__descr'>
                                    По своей сути рыбатекст является альтернативой традиционному
                                    lorem ipsum, который вызывает у некторых людей недоумение при
                                    попытках прочитать рыбу текст. В отличии от lorem ipsum, текст
                                    рыба на русском языке наполнит любой макет непонятным смыслом и
                                    придаст неповторимый колорит советских времен. По своей сути
                                    рыбатекст является альтернативой традиционному lorem ipsum.
                                    <br />
                                    По своей сути рыбатекст является альтернативой традиционному
                                    lorem ipsum, который вызывает у некторых людей недоумение при
                                    попытках прочитать рыбу текст. В отличии от lorem ipsum, текст
                                    рыба на русском языке наполнит любой макет непонятным смыслом и
                                    придаст неповторимый колорит советских времен. По своей сути
                                    рыбатекст является альтернативой традиционному lorem ipsum.
                                </p>
                            </div>
                            <div className='article__middle-text_right'>
                                <Picture img={pic} webp={picW} />
                            </div>
                        </div>
                        <div className='article__center'>
                            <div className='article__center__item'>
                                <Picture img={teacher} webp={teacherW} />
                                <p className='teacher__cernter__item_title'>
                                    Найдите преподавателя
                                </p>
                                <p className='teacher__cernter__item_text'>
                                    Независимо от бюджета и предпочтений, вы точно сможете найти
                                    подходящего для себя учителя.
                                </p>
                            </div>
                            <div className='article__center__item'>
                                <Picture img={working} webp={workingW} />
                                <p className='teacher__cernter__item_title'>Пройдите урок</p>
                                <p className='teacher__cernter__item_text'>
                                    Уроки проходят прямо в вашем браузере. Никаких дополнительных
                                    загрузок и регистраций на сторонних сервисах.
                                </p>
                            </div>
                            <div className='article__center__item'>
                                <Picture img={goal} webp={goalW} />
                                <p className='teacher__cernter__item_title'>
                                    Учитесь каждый день и добивайтесь прогресса
                                </p>
                                <p className='teacher__cernter__item_text'>
                                    Планы уроков, отчеты, сертификаты по окончании каждого этапа
                                    позволят вам с легкостью отслеживать прогресс
                                </p>
                            </div>
                        </div>
                        <div className='article__tabs'>
                            <div className='tabs_top'>
                                <div
                                    className={tab[0] ? 'tabs_top-tab active' : 'tabs_top-tab'}
                                    onClick={() => setTab([true, false])}>
                                    <img src={importantSign} />
                                    <p className='tab_text'>Информация</p>
                                </div>
                                <div
                                    className={tab[1] ? 'tabs_top-tab active' : 'tabs_top-tab'}
                                    onClick={() => setTab([false, true])}>
                                    <img src={importantSign} />
                                    <p className='tab_text'>Еще информация</p>
                                </div>
                            </div>
                            <div className={tab[0] ? 'tabs_descr active' : 'tabs_descr'}>
                                Укрепление и развитие структуры позволяет выполнять важные задания
                                по разработке системы обучения кадров, соответствует насущным
                                потребностям. По своей сути рыбатекст является альтернативой
                                традиционному lorem ipsum, который вызывает у некторых людей
                                недоумение при попытках прочитать рыбу текст. В отличии от lorem
                                ipsum, текст рыба на русском языке наполнит любой макет непонятным
                                смыслом и придаст неповторимый колорит советских времен. По своей
                                сути рыбатекст является альтернативой традиционному lorem ipsum.
                            </div>
                            <div className={tab[1] ? 'tabs_descr active' : 'tabs_descr'}>
                                {revertedText}
                            </div>
                        </div>
                        <div className='article__tabs article__tabs_2'>
                            <div className='tabs_top'>
                                <div
                                    className={tab2[0] ? 'tabs_top-tab active' : 'tabs_top-tab'}
                                    onClick={() => setTab2([true, false, false])}>
                                    <p className='tab_text'>Информация</p>
                                </div>
                                <div
                                    className={tab2[1] ? 'tabs_top-tab active' : 'tabs_top-tab'}
                                    onClick={() => setTab2([false, true, false])}>
                                    <p className='tab_text'>Описание</p>
                                </div>
                                <div
                                    className={tab2[2] ? 'tabs_top-tab active' : 'tabs_top-tab'}
                                    onClick={() => setTab2([false, false, true])}>
                                    <p className='tab_text'>Календарь</p>
                                </div>
                            </div>
                            <div className={tab2[0] ? 'tabs_descr active' : 'tabs_descr'}>
                                Укрепление и развитие структуры позволяет выполнять важные задания
                                по разработке системы обучения кадров, соответствует насущным
                                потребностям. По своей сути рыбатекст является альтернативой
                                традиционному lorem ipsum, который вызывает у некторых людей
                                недоумение при попытках прочитать рыбу текст. В отличии от lorem
                                ipsum, текст рыба на русском языке наполнит любой макет непонятным
                                смыслом и придаст неповторимый колорит советских времен. По своей
                                сути рыбатекст является альтернативой традиционному lorem ipsum.
                            </div>
                            <div className={tab2[1] ? 'tabs_descr active' : 'tabs_descr'}>
                                {revertedText}
                            </div>
                            <div className={tab2[2] ? 'tabs_descr active' : 'tabs_descr'}>
                                <TeacherCalendar />
                            </div>
                        </div>
                    </div>
                    <PopularCourse></PopularCourse>
                    <div className='article__ul-wr'>
                        <ul className='article__ul'>
                            <li className='article__li'></li>
                            <li className='article__li'></li>
                            <li className='article__li'></li>
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerMain>
    );
};

export default Article;
