export default {
    name: 'formSubmission',
    title: 'Form Submissions',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'discord',
            title: 'Discord',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'selectedRoles',
            title: 'Selected Roles',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'ethAddress',
            title: 'Ethereum Address',
            type: 'string',
        },
        {
            name: 'answer1',
            title: 'Answer one',
            type: 'string',
        },
        {
            name: 'answer2',
            title: 'Answer two',
            type: 'string',
        },
        {
            name: 'answer3',
            title: 'Answer three',
            type: 'string',
        },
    ],
}
