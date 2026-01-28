export type AgendaSession = {
    time: string;
    title: string;
    description: string;
};

export type AgendaDay = {
    day: string;
    date: string;
    doorsOpen: string;
    sessions: AgendaSession[];
};

export type AgendaData = {
    title: string;
    description: string;
    days: AgendaDay[];
};
