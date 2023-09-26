import image from '../../photos/home (3).png'
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