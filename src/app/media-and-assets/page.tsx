import { useDesign, Container, Theme, Wrap, Column, SizedBox, Image, Text } from "@serchservice/web-ui-kit";
import Asset from "../../assets/Asset";
import { RouteInterface } from "../../configuration/Route";
import Layout from "../../layout/Layout";
import Title from "../widgets/Title";

export const MediaAndAssetRoute: RouteInterface = {
    path: "/media-and-assets",
    page: <MediaAndAssetPage />
}

export default function MediaAndAssetPage() {
    const assets: IBrandAsset[] = [
        {
            "asset": Asset.logo.white,
            "name": "Transparent white",
            "isDark": true
        },
        {
            "asset": Asset.logo.black,
            "name": "Transparent black",
            "isDark": false
        },
        {
            "asset": Asset.logo.tagWhite,
            "name": "Transparent white",
            "isDark": true
        },
        {
            "asset": Asset.logo.tagBlack,
            "name": "Transparent black",
            "isDark": false
        },
    ]

    const download = (asset: string, title: string) => {
        const anchor = document.createElement('a');
        anchor.href = asset;
        anchor.download = title;
        anchor.click();
    };

    const { generalPadding } = useDesign()

    return (
        <Layout type="asset">
            <Title title="Media And Assets" description="Access our official branded assets for your personal use" />
            <Container backgroundColor={Theme.secondary} padding={generalPadding} width="100%">
                <Wrap runSpacing={40} spacing={30}>
                    {assets.map((asset, index) => {
                        return (
                            <Container
                                key={index}
                                elevation={3}
                                backgroundColor={asset.isDark ? Theme.primary : Theme.secondary}
                                padding="12px"
                                style={{cursor: "pointer"}}
                                onClick={() => download(asset.asset, asset.name)}
                            >
                                <Column crossAxis="center">
                                    <Image image={asset.asset} height={70} objectFit="contain" width={100} />
                                    <SizedBox height={20} />
                                    <Text text={asset.name} color={asset.isDark ? Theme.secondary : Theme.primary} size={14} />
                                </Column>
                            </Container>
                        )
                    })}
                </Wrap>
            </Container>
        </Layout>
    )
}

interface IBrandAsset {
    asset: string;
    name: string;
    isDark: boolean;
}