import UserItemCatalog from './UserItemCatalog';
import { useSelector } from 'react-redux';
let user = {
	avatar: {
		url: '/uploads/thumbnail_photo2_2518c3a0c3.png'
	},
	stars: 4,
	username: 'Example Examlovich',
	country: 'Example',
	CommunicationLang: 'example',
	lang: 'example, example',
	amountStudent: 3,
	amountLessons: 10,
	description: 'Ad ullamco nulla do ipsum ullamco. Ad nulla mollit irure laboris Lorem incididunt veniam nostrud eiusmod eiusmod laboris officia. Proident irure enim mollit aute minim velit eiusmod consectetur voluptate nisi occaecat ipsum enim mollit. Cillum consectetur consectetur commodo occaecat ipsum pariatur do magna est nulla quis.',
	video: 'https://www.youtube.com/embed/vVvHviRH5Ac?si=hrZ-5atJKG6GFyCy>'
}

export default {
    title: 'common/UserItemCatalog',
    component: UserItemCatalog,
    tags: ['autodocs'],
    argTypes: {

    }
}

export const Default = () => {
    const langList = useSelector((state) => state.headerSlice.langList);

    return <UserItemCatalog user={user} />

}
Default.args = {

}
