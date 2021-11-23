import React from 'react';
import Layout from './Layout';

// components
import Banner from './snippets/Banner'
import AvalaunchProtocol from './snippets/AvalaunchProtocol'
import Features from './snippets/Features'
// import Investors from './snippets/Investors'
import Team from './snippets/Team'
import Communities from './snippets/Communities'
import Avalanche from './snippets/Avalanche'
import TeamMembers from './snippets/TeamMembers'
import Header from './Header';

function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Layout>
            <Header />
            <Banner />
            <AvalaunchProtocol />
            <Avalanche />
            <Team />
            <Features />
            {/* <Investors /> */}
            <Communities />
            <TeamMembers />
        </Layout>
    );
}

export default HomePage;