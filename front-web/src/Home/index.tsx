import './styles.css';
import { ReactComponent as HomeImg } from "./home-image.svg";
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br />
                            que entregamos <br />
                            pra você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Escolha seu pedido que em pouco minutos <br />
                            levaremos na sua porta.
                        </h3>
                        <Link to="/orders" className="home-btn-order">
                            FAZER PEDIDO
                        </Link>
                    </div>
                    <div className="home-image">
                        <HomeImg />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;