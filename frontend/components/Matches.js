import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import Match from './Match';
import gql from "graphql-tag";
import { perPage } from '../config';

export const ALL_MATCHES_QUERY = gql`
    query ALL_MATCHES_QUERY($skip: Int = 0, $first: Int) {
        allMatches(first: $first, skip: $skip){
            id
            match_id
            match_date
            match_home_team_id
            match_away_team_id
            match_home_score
            match_away_score
            match_home_penalty_score
            match_away_penalty_score
        }
    }
`;

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

const ItemsList = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	@media (max-width: 830px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0%;
		a {
    		font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;
	}
`;

export default function Matches ({ page }) {
    const { data, error, loading } = useQuery(ALL_MATCHES_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage,
        },
    });
    console.log( data, error, loading )
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <Center>
            <ItemsList>
                {data.allMatches.map((match) => (
                    <Match key={match.id} match={match} />
                ))}
            </ItemsList>
        </Center>
    );
}