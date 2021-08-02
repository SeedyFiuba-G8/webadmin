export const keys = [
    { title: 'Name', align: 'left' },
    { title: 'Description', align: 'left' },
    { title: 'Up since', align: 'center' },
    { title: 'Status', align: 'center' },
    { title: 'Database', align: 'center' },
];

export const services = ['apigateway', 'apikeys', 'core', 'sc', 'users'];
export const mapServiceNames = {
    apigateway: 'API Gateway',
    apikeys: 'API Keys',
    core: 'Core',
    sc: 'Smart Contracts',
    users: 'Users',
};

export const descriptions = {
    apigateway:
        'Microservice written in Node.js that represents the public access point to the API.',
    apikeys:
        'Microservice written in FastAPI (Python) that manages API keys auth between our services.',
    core: 'Microservice written in Node.js that manages projects with its tags, reviewers, funders, and so on.',
    sc: 'Microservice written in Node.js that manages wallets, transactions and general smart contract flow.',
    users: 'Microservice written in Node.js that manages users and admins accounts and sessions.',
};

const defaultInfo = services.reduce(
    (info, key) => ({
        ...info,
        [key]: { creationDate: '-', description: '-' },
    }),
    {}
);

const defaultHealth = services.reduce(
    (info, key) => ({
        ...info,
        [key]: { status: '-', database: '-' },
    }),
    {}
);

export const defaults = {
    health: defaultHealth,
    info: defaultInfo,
};
