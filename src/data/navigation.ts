export type NavLink = {
    id: number;
    title: string;
    url: `#${string}`;
};

export const navLinks: NavLink[] = [
    { id: 1, title: "About us", url: "#about" },
    { id: 2, title: "Rates", url: "#payment" },
    { id: 3, title: "Our speakers", url: "#speakers" },
    { id: 4, title: "FAQ", url: "#faq" },
];
