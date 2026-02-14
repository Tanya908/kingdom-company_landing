export type LocationInfoLine = {
    text: string;
    gapAfter?: boolean;
};

export type LocationInfoBlock = {
    id: string;
    icon: string;
    title: string;
    lines: LocationInfoLine[];
};

export type EventLocation = {
    id: string;
    title: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    mapLabel: string;
    description: string;
    info: LocationInfoBlock[];
};
