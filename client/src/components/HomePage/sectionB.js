import SingersHook from "./hookSingersAPI";
import PropsSingers from "./propsSIngers";

const SectionB = () => {
    const singers = SingersHook('http://localhost:8000/api/singers');
    return(
        <section className="b">
            {/* { isPending && 
            <div className="body">
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <span>loading</span>
                </div>
            </div>
            } */}
            {/* {errorPage && <div className="page_404"><div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-10 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center">404</h1>
                            </div>
                            <div className="content_box_404">
                                <h3 className="h2">Looks Like You're Lost</h3>
                                <p>The page you are looking for not available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            } */}
            {singers && <PropsSingers singers={singers.data} /> }
        </section>
    );
}
export default SectionB;