import { Container } from "./StyledComponents"
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const BasePage = () => {
    return (
		<Container>
			<NavBar />
			<Outlet />
			<Footer />
		</Container>
    );
}

export default BasePage