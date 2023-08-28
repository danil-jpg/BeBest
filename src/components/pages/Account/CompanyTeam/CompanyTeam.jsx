import React, { useEffect, useState } from 'react';
import './CompanyTeam.scss';
import Loading from '../../../common/Loading/Loading';
import UserListCatalog from '../../Catalog/UserListCatalog/UserListCatalog';
import Title from '../../../UI/Title/Title';

const data = {
    title: 'Команда компании'
}

const CompanyTeam = ({ user }) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('http://bebest.pp.ua/api/users?filters[id][$in][0]=13&filters[id][$in][1]=17&filters[id][$in][2]=16&populate=*')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response not ok')
                }

                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Fetch error >', error);
            })
    }, [])

    if (!users) return <Loading />

    return (
        <div className='company-team'>
            <Title type="subtitle">{data.title}</Title>
            <UserListCatalog users={users} />
        </div>
    );
};

export default CompanyTeam;
