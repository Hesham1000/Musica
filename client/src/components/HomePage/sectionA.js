import image from '../../photos/pexels-daniel-reche-3721941.jpg';

const SectionA = () => {
    return(
        <section className = 'a'>
            <div className="text">
            <h1>good music <span>for</span> <span>bad days</span></h1>
        </div>
        <div className="image"><img src={image} alt="not found" /></div>
        </section>
    );
}
export default SectionA;