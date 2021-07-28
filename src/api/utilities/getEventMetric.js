import { getEventsUsersMetric } from '../metricsQuery';

var defaultData = {
    admins: {
        register: { value: 13, profit: true, difference: 7 },
        login: { value: 830, profit: false, difference: -2 },
        ban: { value: 830, profit: false, difference: -2 },
        unban: { value: 830, profit: false, difference: -2 },
    },
    users: {
        register: {
            native: { value: 830, profit: false, difference: -2 },
            federate: { value: 830, profit: false, difference: -2 },
        },
        login: {
            native: { value: 830, profit: false, difference: -2 },
            federate: { value: 21, profit: true, difference: 7 },
        },
        passwordRecovery: { value: 28, profit: false, difference: -3 },
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

            const metricsToday = getEventsUsersMetric(configToday);
            const metricsLastDay = getEventsUsersMetric(configLastDay);

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
                            value: metricsToday.user.register.native,
                            profit:
                                metricsToday.user.register.native >
                                metricsLastDay.user.register.native
                                    ? true
                                    : false,
                            difference:
                                metricsToday.user.register.native -
                                metricsLastDay.user.register.native,
                        },
                        federate: {
                            value: metricsToday.user.register.federate,
                            profit:
                                metricsToday.user.register.federate >
                                metricsLastDay.user.register.federate
                                    ? true
                                    : false,
                            difference:
                                metricsToday.user.register.federate -
                                metricsLastDay.user.register.federate,
                        },
                    },
                    login: {
                        native: {
                            value: metricsToday.user.login.native,
                            profit:
                                metricsToday.user.login.native >
                                metricsLastDay.user.login.native
                                    ? true
                                    : false,
                            difference:
                                metricsToday.user.login.native -
                                metricsLastDay.user.login.native,
                        },
                        federate: {
                            value: metricsToday.user.login.federate,
                            profit:
                                metricsToday.user.login.federate >
                                metricsLastDay.user.login.federate
                                    ? true
                                    : false,
                            difference:
                                metricsToday.user.login.federate -
                                metricsLastDay.user.login.federate,
                        },
                    },
                    passwordRecovery: {
                        value: metricsToday.user.passwordRecovery,
                        profit:
                            metricsToday.user.passwordRecovery >
                            metricsLastDay.user.passwordRecovery
                                ? true
                                : false,
                        difference:
                            metricsToday.user.passwordRecovery -
                            metricsLastDay.user.passwordRecovery,
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
                finalDate: today,
            };
            const configLastWeek = {
                initialDate: lastWeek,
                finalDate: thisWeek,
            };

            const metricsThisWeek = getEventsUsersMetric(configThisWeek);
            const metricsLastWeek = getEventsUsersMetric(configLastWeek);

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
                            value: metricsThisWeek.user.register.native,
                            profit:
                                metricsThisWeek.user.register.native >
                                metricsLastWeek.user.register.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.user.register.native -
                                metricsLastWeek.user.register.native,
                        },
                        federate: {
                            value: metricsThisWeek.user.register.federate,
                            profit:
                                metricsThisWeek.user.register.federate >
                                metricsLastWeek.user.register.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.user.register.federate -
                                metricsLastWeek.user.register.federate,
                        },
                    },
                    login: {
                        native: {
                            value: metricsThisWeek.user.login.native,
                            profit:
                                metricsThisWeek.user.login.native >
                                metricsLastWeek.user.login.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.user.login.native -
                                metricsLastWeek.user.login.native,
                        },
                        federate: {
                            value: metricsThisWeek.user.login.federate,
                            profit:
                                metricsThisWeek.user.login.federate >
                                metricsLastWeek.user.login.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisWeek.user.login.federate -
                                metricsLastWeek.user.login.federate,
                        },
                    },
                    passwordRecovery: {
                        value: metricsThisWeek.user.passwordRecovery,
                        profit:
                            metricsThisWeek.user.passwordRecovery >
                            metricsLastWeek.user.passwordRecovery
                                ? true
                                : false,
                        difference:
                            metricsThisWeek.user.passwordRecovery -
                            metricsLastWeek.user.passwordRecovery,
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
                finalDate: today,
            };
            const configLastMonth = {
                initialDate: lastMonth,
                finalDate: thisMonth,
            };

            const metricsThisMonth = getEventsUsersMetric(configThisMonth);
            const metricsLastMonth = getEventsUsersMetric(configLastMonth);

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
                            value: metricsThisMonth.user.register.native,
                            profit:
                                metricsThisMonth.user.register.native >
                                metricsLastMonth.user.register.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.user.register.native -
                                metricsLastMonth.user.register.native,
                        },
                        federate: {
                            value: metricsThisMonth.user.register.federate,
                            profit:
                                metricsThisMonth.user.register.federate >
                                metricsLastMonth.user.register.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.user.register.federate -
                                metricsLastMonth.user.register.federate,
                        },
                    },
                    login: {
                        native: {
                            value: metricsThisMonth.user.login.native,
                            profit:
                                metricsThisMonth.user.login.native >
                                metricsLastMonth.user.login.native
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.user.login.native -
                                metricsLastMonth.user.login.native,
                        },
                        federate: {
                            value: metricsThisMonth.user.login.federate,
                            profit:
                                metricsThisMonth.user.login.federate >
                                metricsLastMonth.user.login.federate
                                    ? true
                                    : false,
                            difference:
                                metricsThisMonth.user.login.federate -
                                metricsLastMonth.user.login.federate,
                        },
                    },
                    passwordRecovery: {
                        value: metricsThisMonth.user.passwordRecovery,
                        profit:
                            metricsThisMonth.user.passwordRecovery >
                            metricsLastMonth.user.passwordRecovery
                                ? true
                                : false,
                        difference:
                            metricsThisMonth.user.passwordRecovery -
                            metricsLastMonth.user.passwordRecovery,
                    },
                },
            };
        default:
            return defaultData;
    }
}

export { dateRange, getEventsUsersMetricData, defaultData };
