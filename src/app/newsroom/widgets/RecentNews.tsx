import { Theme, Row, Expanded, SizedBox, Text } from "@serchservice/web-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import Routing from "../../../configuration/Routing";

interface RecentNewsProps {
    header: string;
    date: string;
    slug: string;
}

const RecentNews: React.FC<RecentNewsProps> = ({header, slug, date}) => {
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    const buttonStyle = {
        borderBottom: isHovered ? `2.5px ${Theme.primary} solid` : 'none',
        display: 'inline-block',
        padding: isHovered ? '4px 16px 4px 0' : '4px 0',
        cursor: 'pointer',
        width: '100%',
        transition: 'border 0.1s, color 0.3s, padding 0.3s',
    };

    return (
        <Link to={Routing.getRoute(Routing.instance.news, {slug: slug})} style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Row crossAxis='center'>
                <Expanded>
                    <Text text={header} size={15} color={Theme.primary} />
                </Expanded>
                <SizedBox width={20} />
                <Text text={date} size={12} color={Theme.primary} opacity={0.5} />
            </Row>
        </Link>
    );
};

export default RecentNews;