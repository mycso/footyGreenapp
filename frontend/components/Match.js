import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

export default function Match({ match }) {

    console.log(match)

    return <ItemStyles>
        <Title>
            <h2><span>{match.match_home_score} - {match.match_away_score}</span></h2>
        </Title>
        <p>{match?.match_date}</p>
    </ItemStyles>;
}