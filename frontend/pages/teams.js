import { useRouter } from 'next/dist/client/router';
import Teams from '../components/Teams';
import TeamPagination from '../components/TeamPagination';
import styled from 'styled-components';

const Center = styled.div`
	text-align: center;
`;

export default function TeamsPage() {
  const { query } = useRouter();
	const page = parseInt(query.page);

  return <div>
    <Teams page={page || 1} />
    <Center>
      <TeamPagination page={page || 1} />
    </Center>
  </div>
}
