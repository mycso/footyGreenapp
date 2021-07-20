import Head from 'next/head';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import gql from 'graphql-tag';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from '../components/ErrorMessage'
import { perPage } from '../config';

export const PAGINATION_QUERY = gql `
    query PAGINATION_QUERY {
        _allTeamsMeta {
            count
        }
    }
`;

export default function TeamPagination({ page }) {
    const { error, loading, data } = useQuery(PAGINATION_QUERY);
    if(loading) return 'Loading...';
    if(error) return <DisplayError error={error} />;
    const { count } = data._allTeamsMeta;
    const pageCount = Math.ceil(count / perPage);

    return (
        <PaginationStyles>
            <Head>
                <title>Footy Green - Page {page} of {pageCount}</title>
            </Head>
            {page !== 1 && <Link href={`/matches/${page - 1}`}>Prev</Link>}
            <p>Page {page} of {pageCount}</p>
            <p>{count} Items Total</p>
            {page !== pageCount && <Link href={`/matches/${page + 1}`}>Next</Link>}
        </PaginationStyles>
    );
    
}