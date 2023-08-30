import React, { useState } from 'react';
import '../PersonData.scss';
import axios from 'axios';
import InputForm from '../../../../UI/Forms/InputForm/InputForm';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import Title from '../../../../UI/Title/Title';

const titles = {
    personal: 'Личные данные',
    btn: 'Сохранить изменения'
}

const titleInputs = {
    ogrn: 'ОГРН',
    payment1: 'Расчетный счет организации',
    kpp: 'КПП',
    payment2: 'Корреспондентский счет банка',
    addr: 'Юридический адрес',
    bik: 'БИК банка',
    okpo: 'ОКПО',
}


const CompanyPersonView = ({ user }) => {
    const [ogrn, setOgrn] = useState('');
    const [payment1, setPayment1] = useState('');
    const [kpp, setKpp] = useState('');
    const [payment2, setPayment2] = useState('');
    const [addr, setAddr] = useState('');
    const [bik, setBik] = useState('');
    const [okpo, setOkpo] = useState('');

    const onButtonClickHandler = (e) => {
        // let id = sessionStorage.getItem('id')
        // e.preventDefault();
        // axios
        //     .put(`http://bebest.pp.ua/api/users/${id}`, {
        //         country: country,
        //         lang: language,
        //         time: time,
        //         description: description,
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((e) => {
        //         alert(e.message);
        //         console.log(e.message);
        //     });
    };

    return (
        <div className='personal-data'>
            <div className="personal-data__block">
                <Title type='subtitle'>{titles.personal}</Title>
                <div className="personal-data__inputs-inner">
                        <InputForm
                            title={titleInputs.ogrn}
                            value={ogrn}
                            setValue={setOgrn}
                        />
                        <InputForm
                            title={titleInputs.payment1}
                            value={payment1}
                            setValue={setPayment1}
                        />
                        <InputForm
                            title={titleInputs.kpp}
                            value={kpp}
                            setValue={setKpp}
                        />
                        <InputForm
                            title={titleInputs.payment2}
                            value={payment2}
                            setValue={setPayment2}
                        />
                        <InputForm
                            title={titleInputs.addr}
                            value={addr}
                            setValue={setAddr}
                        />
                        <InputForm
                            title={titleInputs.bik}
                            value={bik}
                            setValue={setBik}
                        />
                        <InputForm
                            title={titleInputs.okpo}
                            value={okpo}
                            setValue={setOkpo}
                        />
                </div>
            </div>

            <MainButton
                style={{ marginTop: '30px', width: '240px' }}
                onClick={(e) => onButtonClickHandler(e)}>
                {titles.btn}
            </MainButton>



        </div>
    );
};

export default CompanyPersonView;
