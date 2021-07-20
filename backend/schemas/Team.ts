import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Team = list({
    ui: {
        listView: {
            initialColumns: ['team_id', 'team_name', 'team_first_color', 'stat']
        }
    },
    //TODO: custom labels in here
    fields: {
        team_id: integer({ isRequired: true }),
        team_name: text({ isRequired: true }),
        team_first_color: text({ isRequired: true }),
        stat: relationship({
            ref: 'Stat.team',
        }),
    },
});