import React from 'react';
import Header from '../../../Components/Header';
import Banner from '../../../Components/HomePage/Banner';
import { Helmet } from 'react-helmet-async';
import PremiumMembers from '../../../Components/HomePage/PremiumMembers';
import SuccessStory from '../../../Components/HomePage/SuccessStory';
import Counter from '../../../Components/HomePage/Counter';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>HomePage | Matrimony</title>
            </Helmet>

            <Header></Header>
            <Banner />
            <PremiumMembers />
            <Counter></Counter>
            <SuccessStory></SuccessStory>
        </>
    );
};

export default HomePage;