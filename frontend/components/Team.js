import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

export default function Team({ team }) {

    console.log(team)

    return <ItemStyles>
        <Title>
            <h2><span>{team.team_name}</span> - <span className="country-colors" style={{'backgroundColor': `${team.team_first_color}`}}></span></h2>
        </Title>
        <p>{team?.match_date}</p>
    </ItemStyles>;
}