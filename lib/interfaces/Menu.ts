export interface NavbarItem {
    id: number;
    title: string;
    href: string;
    children?: NavbarItem[]
}
