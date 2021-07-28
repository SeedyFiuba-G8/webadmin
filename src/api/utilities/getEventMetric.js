import { getEventsUsersMetric } from '../metricsQuery';

var defaultData = {
    admins: {
        register: { value: '-', profit: true, difference: '-' },
        login: { value: '-', profit: false, difference: '-' },
        ban: { value: '-', profit: false, difference: '-' },
        unban: { value: '-', profit: false, difference: '-' },
    },
    users: {
        register: {
            native: { value: '-', profit: true, difference: '-' },
            federate: { value: '-', profit: true, difference: '-' },
        },
        login: {
            native: { value: '-', profit: true, difference: '-' },
            federate: { value: '-', profit: true, difference: '-' },
        },
        passwordRecovery: { value: '-', profit: true, difference: '-' },
    },
};

const dateRange = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
};

async function getEventsUsersMetricData(dateVariation) {
    const actualDate = new Date();
    const today = new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        actualDate.getDate()
    );
    switch (dateVariation) {
        case dateRange.DAILY:
            const lastDay = new Date(
                actualDate.getFullYear(),
                actualDate.getMonth(),
                actualDate.getDate() - 1
            );
            const configToday = {
                initialDate: today,
                finalDate: actualDate,
            };
            const configLastDay = {
                initialDate: lastDay,
                finalDate: today,
            };

            const metricsToday = await getEventsUsersMetric(configToday);
            const metricsLastDay = await getEventsUsersMetric(configLastDay);

            return {
                admins: {
                    register: {
                        value: metricsToday.admins.register,
                        profit:
                            metricsToday.admins.register >
                            metricsLastDay.admins.register
                                ? true
                                : false,
                        difference:
                            metricsToday.admins.register -
                            metricsLastDay.admins.register,
                    },
                    login: {
                        value: metricsToday.admins.login,
                        profit:
                            metricsToday.admins.login >
                            metricsLastDay.admins.login
                                ? true
                                : false,
                        difference:
                            metricsToday.admins.login -
                            metricsLastDay.admins.login,
                    },
                    ban: {
                        value: metricsToday.admins.ban,
                        profit:
                            metricsToday.admins.ban > metricsLastDay.admins.ban
                                ? true
                                : false,
                        difference:
                            metricsToday.admins.ban - metricsLastDay.admins.ban,
                    },
                    unban: {
                        value: metricsToday.admins.unban,
                        profit:
                            metricsToday.admins.unban >
                            metricsLastDay.admins.unban
                                ? true
                                : false,
                        difference:
                            metricsToday.admins.unban -
                            metricsLastDay.admins.unban,
                    },
                },
                users: {
                    register: {
                        native: {
                            value: metricsToday.users.register.native,
                            profit:
                                metricsToday.users.register.native >
                                metricsLastDay.users.register.native
                                    ? true
                                    : false,
                            difference:
                                metricsToday.users.register.native -
                                metricsLastDay.users.register.native,
                        },
                        federate: {
                            value: metricsToday.users.register.federate,
                            profit:
                                metricsToday.users.register.federate >
                                metricsLastDay.users.register.federate
                                    ? true
                                    : false,
                            difference:
                                metricsToday.users.register.federate -
                                metricsLastDay.users.register.federate,
                        },
                    },
                    login: {
                        native: {
                            value: metricsToday.users.login.native,
                            profit:
                                metricsToday.users.login.native >
                                metricsLastDay.users.login.native
                                    ? true
                                    : false,
                            difference:
                                metricsToday.users.login.native -
                                metricsLastDay.users.login.native,
                        },
                        federate: {
                            value: metricsToday.users.login.federate,
                            profit:
                                metricsToday.users.login.federate >
                                metricsLastDay.users.login.federate
                                    ? true
                                    : false,
                            difference:
                                metricsToday.users.login.federate -
                                metricsLastDay.users.login.federate,
                        },
                    },
                    passwordRecovery: {
                        value: metricsToday.users.passwordRecovery,
                        profit:
                            metricsToday.users.passwordRecovery >
                            metricsLastDay.users.passwordRecovery
                                ? true
                                : false,
                        difference:
                            metricsToday.users.passwordRecovery -
                            metricsLastDay.users.passwordRecovery,
                    },
                },
            };
        case dateRange.WEEKLY:
            const lastWeek = new Date(
                actualDate.getFullYear(),
                actualDate.getMonth(),
                actualDate.getDate() - 14
            );
            const thisWeek = new Date(
                actualDate.getFullYear(),
                actualDate.getMonth(),
                actualDate.getDate() - 7
            );

            const configThisWeek = {
                initialDate: thisWeek,
                finalDate: actualDate,
            };
            const configLastWeek = {
                initialDate: lastWeek,
                finalDate: thisWeek,
            };

            const metricsThisWeek = await getEventsUsersMetric(configThisWeek);
            const metricsLastWeek = await getEventsUsersMetric(configLastWeek);

            return {
                admins: {
                    register: {
                        value: metricsThisWeek.admins.register,
                        profit:
                            metricsThisWeek.admins.register >
                            metricsLastWeek.admins.register
                                ? true
                                : false,
                        difference:
                            metricsThisWeek.admins.register -
                            metricsLastWeek.admins.register,
                    },
                    login: {
                        value: metricsThisWeek.admins.login,
                        profit:
                            metricsThisWeek.admins.login >
                            metricsLastWeek.admins.login
                                ? true
                                : false,
                        difference:
                            metricsThisWeek.admins.login -
                            metricsLastWeek.admins.login,
                    },
                    ban: {
                        value: metricsThisWeek.admins.ban,
                        profit:
                            metricsThisWeek.admins.ban >
                            metricsLastWeek.admins.ban
                                ? true
                                : false,
                        difference:
                            metricsThisWeek.admins.ban -
                            metricsLastWeek.admins.ban,
                    },
                    unban: {
                        value: metricsThisWeek.admins.unban,
                        profit:
                            metricsThisWeek.admins.unban >
                            metricsLastWeek.admins.unban
                                ? true
                                : false,
                        difference:
                            metricsThisWeek.admins.unban -
                            metricsLastWeek.admins.unban,
                    },
                },
                users: {
                    register: {
                        native: {
                            value: metricsThisWeek.users.register.native,
                            profit:
                                metricsThisWeek.users.register.native >
                                metricsLastWeek.users.register.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.users.register.native -
                                metricsLastWeek.users.register.native,
                        },
                        federate: {
                            value: metricsThisWeek.users.register.federate,
                            profit:
                                metricsThisWeek.users.register.federate >
                                metricsLastWeek.users.register.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.users.register.federate -
                                metricsLastWeek.users.register.federate,
                        },
                    },
                    login: {
                        native: {
                            value: metricsThisWeek.users.login.native,
                            profit:
                                metricsThisWeek.users.login.native >
                                metricsLastWeek.users.login.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.users.login.native -
                                metricsLastWeek.users.login.native,
                        },
                        federate: {
                            value: metricsThisWeek.users.login.federate,
                            profit:
                                metricsThisWeek.users.login.federate >
                                metricsLastWeek.users.login.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.users.login.federate -
                                metricsLastWeek.users.login.federate,
                        },
                    },
                    passwordRecovery: {
                        value: metricsThisWeek.users.passwordRecovery,
                        profit:
                            metricsThisWeek.users.passwordRecovery >
                            metricsLastWeek.users.passwordRecovery
                                ? true
                                : false,
                        difference:
                            metricsThisWeek.users.passwordRecovery -
                            metricsLastWeek.users.passwordRecovery,
                    },
                },
            };
        case dateRange.MONTHLY:
            const lastMonth = new Date(
                actualDate.getFullYear(),
                actualDate.getMonth() - 2,
                actualDate.getDate()
            );
            const thisMonth = new Date(
                actualDate.getFullYear(),
                actualDate.getMonth() - 1,
                actualDate.getDate()
            );

            const configThisMonth = {
                initialDate: thisMonth,
                finalDate: actualDate,
            };
            const configLastMonth = {
                initialDate: lastMonth,
                finalDate: thisMonth,
            };

            const metricsThisMonth = await getEventsUsersMetric(
                configThisMonth
            );
            const metricsLastMonth = await getEventsUsersMetric(
                configLastMonth
            );

            return {
                admins: {
                    register: {
                        value: metricsThisMonth.admins.register,
                        profit:
                            metricsThisMonth.admins.register >
                            metricsLastMonth.admins.register
                                ? true
                                : false,
                        difference:
                            metricsThisMonth.admins.register -
                            metricsLastMonth.admins.register,
                    },
                    login: {
                        value: metricsThisMonth.admins.login,
                        profit:
                            metricsThisMonth.admins.login >
                            metricsLastMonth.admins.login
                                ? true
                                : false,
                        difference:
                            metricsThisMonth.admins.login -
                            metricsLastMonth.admins.login,
                    },
                    ban: {
                        value: metricsThisMonth.admins.ban,
                        profit:
                            metricsThisMonth.admins.ban >
                            metricsLastMonth.admins.ban
                                ? true
                                : false,
                        difference:
                            metricsThisMonth.admins.ban -
                            metricsLastMonth.admins.ban,
                    },
                    unban: {
                        value: metricsThisMonth.admins.unban,
                        profit:
                            metricsThisMonth.admins.unban >
                            metricsLastMonth.admins.unban
                                ? true
                                : false,
                        difference:
                            metricsThisMonth.admins.unban -
                            metricsLastMonth.admins.unban,
                    },
                },
                users: {
                    register: {
                        native: {
                            value: metricsThisMonth.users.register.native,
                            profit:
                                metricsThisMonth.users.register.native >
                                metricsLastMonth.users.register.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.users.register.native -
                                metricsLastMonth.users.register.native,
                        },
                        federate: {
                            value: metricsThisMonth.users.register.federate,
                            profit:
                                metricsThisMonth.users.register.federate >
                                metricsLastMonth.users.register.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.users.register.federate -
                                metricsLastMonth.users.register.federate,
                        },
                    },
                    login: {
                        native: {
                            value: metricsThisMonth.users.login.native,
                            profit:
                                metricsThisMonth.users.login.native >
                                metricsLastMonth.users.login.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.users.login.native -
                                metricsLastMonth.users.login.native,
                        },
                        federate: {
                            value: metricsThisMonth.users.login.federate,
                            profit:
                                metricsThisMonth.users.login.federate >
                                metricsLastMonth.users.login.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.users.login.federate -
                                metricsLastMonth.users.login.federate,
                        },
                    },
                    passwordRecovery: {
                        value: metricsThisMonth.users.passwordRecovery,
                        profit:
                            metricsThisMonth.users.passwordRecovery >
                            metricsLastMonth.users.passwordRecovery
                                ? true
                                : false,
                        difference:
                            metricsThisMonth.users.passwordRecovery -
                            metricsLastMonth.users.passwordRecovery,
                    },
                },
            };
        default:
            return defaultData;
    }
}

export { dateRange, getEventsUsersMetricData, defaultData };
