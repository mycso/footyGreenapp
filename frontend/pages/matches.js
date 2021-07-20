import { useRouter } from 'next/dist/client/router';
import Matches from '../components/Matches';
import MatchPagination from '../components/MatchPagination';
import styled from 'styled-components';

const Center = styled.div`
	text-align: center;
`;

export default function MatchesPage() {
  const { query } = useRouter();
	const page = parseInt(query.page);

  return <div>
    <Matches page={page || 1} />
    <Center>
      <MatchPagination page={page || 1} />
    </Center>
   
  </div>
}
