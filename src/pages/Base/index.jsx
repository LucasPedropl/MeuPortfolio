import { Container, Main } from "./StyledComponents"
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const BasePage = () => {
    return (
		<Container>
			<NavBar />
			<Main>
				<Outlet />
			</Main>

			<Footer />
		</Container>
    );
}

export default BasePage