import LangSelectFrom from './LangSelectFrom';
import { useSelector } from 'react-redux';

export default {
    title: 'UI/Forms/LangSelectFrom',
    component: LangSelectFrom,
    tags: ['autodocs'],
    argTypes: {
        list: {
            description: `Массив обьектов select: \n
            { 
                id: number | string, 
                title: string, 
                selected: boolean 
            }`
        },
        style: {
            description: 'Обьект стилей',
        },
    }
}

export const Default = () => {
    const langList = useSelector((state) => state.headerSlice.langList);

    return <LangSelectFrom list={langList} />

}
Default.args = {

}
