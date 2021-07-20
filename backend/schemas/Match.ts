import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Match = list({
    ui: {
        listView: {
            initialColumns: [
                'match_id',
                'match_date',
                'match_home_team_id',
                'match_away_team_id',
                'match_home_score',
                'match_away_score',
                'match_home_penalty_score',
                'match_away_penalty_score',
            ]
        }
    },

    // TODO
    // access: 
    fields: {
        match_id: integer({ isRequired: true }),
        match_date: text({ isRequired: true }),
        match_home_team_id: integer({ isRequired: true }),
        match_away_team_id: integer({ isRequired: true }),
        match_home_score: integer({ isRequired: true }),
        match_away_score: integer({ isRequired: true }),
        match_home_penalty_score: integer(),
        match_away_penalty_score: integer(),
    },
});