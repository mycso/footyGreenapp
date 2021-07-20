import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

export default function Player({ player }) {

    console.log(player)

    return <ItemStyles>
        <Link href={`/player/${player.id}`}>
            <img 
                src={player?.photo?.image?.publicUrlTransformed} 
                alt={player.player_name} 
            />
        </Link>
        <Title>
            <Link href={`/player/${player.id}`}>{player.player_name}</Link>
        </Title>
        <p>{player?.country_name}</p>
        <p>{player?.player_birth_date}</p>
    </ItemStyles>;
}