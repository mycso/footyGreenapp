import { useRouter } from 'next/dist/client/router';
import Players from '../../components/Players';
import Pagination from '../../components/Pagination';
import styled from 'styled-components';

const Center = styled.div`
	text-align: center;

	.buttonup {
	    width: auto;
	    color: white;
	    background-color: ${props => props.theme.orange};
	    border: 0;
	    border-radius: ${props => props.theme.roundedCorner} !important;
	    font-size: 1rem;
	    padding: 0.9rem 1.2rem;
  	}
`;

export default function PlayerPage() {
	const { query } = useRouter();
	const page = parseInt(query.page);
  
	return (
		<div>
			<Players page={page || 1} />
			<Center>
			<Pagination page={page || 1} />
			</Center>
		</div>
  	);
}
