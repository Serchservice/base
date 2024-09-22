export interface ModalProps {
    handleClose: () => void;
    isOpen: boolean;
}

export interface HeaderProps {
    type?: "news" | "blog" | "asset" | "default";
}

export interface LeftProps {
    isMobile: boolean;
    isDesktop: boolean;
}

export interface IListView {
    header: string;
    description: string[];
    color: string;
    image?: string;
    position?: 'left' | 'right';
    link?: string;
    linkText?: string;
}

export interface IStep {
    image?: false | string;
    content: React.ReactNode;
}