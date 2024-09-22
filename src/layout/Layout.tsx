import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { HeaderProps } from "./Interfaces";
import { Stack, Positioned } from "@serchservice/web-ui-kit";

interface LayoutProps extends HeaderProps {
    isShortFooter?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Layout: React.FC<LayoutProps> = ({ isShortFooter, children, type, style }) => {
    const renderBody = () => {
        if(type === 'blog' || type === "news") {
            return (
                <Stack>
                    <Positioned top={0} left={0} right={0} placement="sticky" order={99} >
                        <Header type={type} />
                    </Positioned>
                    {children}
                    <Footer isShort={isShortFooter} />
                </Stack>
            )
        } else {
            return (
                <React.Fragment>
                    <Header type={type} />
                    {children}
                    <Footer isShort={isShortFooter || type === 'asset'} />
                </React.Fragment>
            )
        }
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                overflow: 'auto',
                minHeight: '100vh',
                alignItems: 'center',
                flexDirection: 'column',
                ...style
            }}
        >{renderBody()}</div>
    );
};

export default Layout;