import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Stat = list({
    ui: {
        listView: {
            initialColumns: [
                'match_id',
                'team_id',
                'player_id',
                'minutes_played',
                'team_possession_percentage',
                'xg',
                'shots',
                'goals',
                'tackles',
                'interceptions',
                'pressures',
                'passes',
                'completed_passes',
                'left_foot_passes',
                'right_foot_passes',
                'player_shots_faced',
                'player',
                'team',
            ]
        }
    },

    // TODO
    // access: 
    fields: {
        match_id: integer({ isRequired: true }),
        team_id: integer({ isRequired: true }),
        player_id: integer({ isRequired: true }),
        minutes_played: text(),
        team_possession_percentage: text(),
        xg: integer({ isRequired: true }),
        shots: integer({ isRequired: true }),
        goals: integer({ isRequired: true }),
        tackles: integer({ isRequired: true }),
        interceptions: integer({ isRequired: true }),
        pressures: integer({ isRequired: true }),
        passes: integer({ isRequired: true }),
        completed_passes: integer({ isRequired: true }),
        left_foot_passes: integer({ isRequired: true }),
        right_foot_passes: integer({ isRequired: true }),
        player_shots_faced: integer({ isRequired: true }),
        player: relationship({ ref: 'Player.stat' }),
        team: relationship({ ref: 'Team.stat' }),
    },
});