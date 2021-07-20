import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Player = list({
    ui: {
        listView: {
            initialColumns: ['player_id', 'player_name', 'player_known_name', 'player_birth_date', 'country_id', 'country_name', 'country_code']
        }
    },

    // TODO
    // access: 
    fields: {
        player_id: integer({ isRequired: true }),
        player_name: text({ isRequired: true }),
        player_known_name: text(),
        player_birth_date: text({ isRequired: true }),
        country_id: integer(),
        country_name: text({ isRequired: true }),
        country_code: text({ isRequired: true }),
        photo: relationship({
            ref: 'PlayerImage.player',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        stat: relationship({
            ref: 'Stat.player',
        }),
        status: select({
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Available', value: 'AVAILABLE' },
                { label: 'Unavailable', value: 'UNAVAILABLE' },
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: { fieldMode: 'hidden' },
            }
        }),
    },
});