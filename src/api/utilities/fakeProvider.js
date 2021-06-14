function get(resource, params) {
    switch (resource) {
        case 'project':
            return {
                projects: [
                    {
                        id: '0',
                        title: 'project0',
                        description: 'Proyecto inexistente',
                        type: 'un tipo?',
                        objective: 'Obtener algo de ejemplo',
                        country: 'Argentina papa',
                        city: 'Bariloche',
                        published_on: 'no sé, una fecha',
                        finalized_by: 'not yet',
                    },
                    {
                        id: '1',
                        title: 'project1',
                        description: 'Proyecto existente',
                        type: 'si, 3',
                        objective: 'NO GOD',
                        country: 'No sabían',
                        city: 'Menos',
                        published_on: 'ayer, siempre ayer',
                        finalized_by: 'siempre mañana',
                    },
                ],
            };
        case 'user': {
            return {
                users: [
                    {
                        email: 'unmail@hotmail.com',
                        firstName: 'Name',
                        lastName: 'Lastname',
                    },
                    {
                        email: 'otromail@gmail.com',
                        firstName: 'Lalala',
                        lastName: 'BRUH',
                    },
                ],
            };
        }
        default: {
            console.log('error');
        }
    }
}

const apiProvider = {
    get,
};

export default apiProvider;
