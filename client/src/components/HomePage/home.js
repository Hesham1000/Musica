import Header from '../../partials/header';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import Footer from '../../partials/footer';



const Home = () => {
    return(
        <div className = 'home'>
            <Header />
            <SectionA />
            <SectionB />
            <SectionC />
            <Footer />
        </div>
    );
}
export default Home;