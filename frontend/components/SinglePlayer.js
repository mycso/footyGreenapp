import styled from 'styled-components';
import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import DisplayError from "./ErrorMessage";
import Head from 'next/head';
import SingleItemStyles from './styles/SingleItemStyles';
import { Bar } from 'react-chartjs-2';
import formatMoney from '../lib/formatMoney';

const Center = styled.div`
	text-align: center;
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

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY ($id: ID!){
        Player(where: { id: $id }) {
            player_name
            country_name
            id
            stat {
                minutes_played
                team_possession_percentage
                shots
                goals
                tackles
                interceptions
                pressures
                passes
                completed_passes
                left_foot_passes
                right_foot_passes
                player_shots_faced
            }
            photo {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
        
        # allProducts (where: {
        #   name_contains_i: "Yeti"
        # }) {
        #   name
        #   price
        #   description
        # }
    }

`;

export default function SinglePlayer({ id }) {
    const { data, loading, error } = useQuery
        (SINGLE_ITEM_QUERY, {
            variables: {
                id,
            },
        });
    if (loading) return <p>Loading...</p>;
    if (error) return <DisplayError error={error} />; 
    const { Player } = data;
    console.log(Player)
    
    const testData = {
        labels: [
            'Minutes Played', 
            'Team Possession Percentage', 
            'Xg',
            'Shots', 
            'Goals', 
            'Tackles', 
            'Interceptions',
            'Pressures',
            'Passes',
            'Completed Passes',
            'Left Foot Passes',
            'Right Foot Passes',
            'Player Shots Faced',
        ],
        datasets: [
            {
            label: 'Player Stats',
            data: [
                Player?.stat.minutes_played, 
                Player?.stat.team_possession_percentage,
                Player?.stat.xg, 
                Player?.stat.shots, 
                Player?.stat.goals, 
                Player?.stat.tackles, 
                Player?.stat.interceptions,
                Player?.stat.pressures,
                Player?.stat.passes,
                Player?.stat.completed_passes,
                Player?.stat.left_foot_passes,
                Player?.stat.right_foot_passes,
                Player?.stat.player_shots_faced,
            ],
            fill: false,
            backgroundColor: '#9fda34',
            borderColor: '#9fda34',
            },
        ],
    };
      
    const options = {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        },
    };

    return (
        <SingleItemStyles>
            <Head>
                <title>Footy Green Powered by Stats Bomb - {Player.name}</title>
            </Head>
            <div className="item-details">
                <img 
                    src={Player?.photo?.image?.publicUrlTransformed} 
                    alt={Player.player_name} 
                />
                <div className="details">
                    <h2>{Player.player_name}</h2>
                    <p>Nationality: {Player.country_name}</p>
                    <p>Minutes Played: {Player.stat.minutes_played === null ? Player.stat.minutes_played : 'N/A'}</p>
                    <p>Team Possession Percentage: {Player.stat.team_possession_percentage}</p>
                    <p>Xg: {Player.stat.xg === '' ? Player.stat.xg : 'N/A'}</p>
                    <p>Shots: {Player.stat.shots}</p>
                    <p>Goals: {Player.stat.goals}</p>
                    <p>Tackles: {Player.stat.tackles}</p>
                    <p>Interceptions: {Player.stat.interceptions}</p>
                    <p>Pressures: {Player.stat.pressures}</p>
                    <p>Passes: {Player.stat.passes}</p>
                    <p>Completed Passes: {Player.stat.completed_passes}</p>
                    <p>Left Foot Passes: {Player.stat.left_foot_passes}</p>
                    <p>Right Foot Passes: {Player.stat.right_foot_passes}</p>
                    <p>Player Shots Faced: {Player.stat.player_shots_faced}</p>
                </div>
            </div>
            <div>
                <Bar data={testData} options={options} />
            </div>
        </SingleItemStyles>
    );
}