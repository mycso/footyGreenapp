import styled from 'styled-components';
import SinglePlayer from '../../components/SinglePlayer';

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	font-size: 20px;
`;

export default function SinglePlayerPage({ query }) {
    return <Inner>
        <SinglePlayer id={query.id} />
    </Inner>;
}