import { Article } from "@serchservice/contently";
import { Container, Pager, Shimmer, SizedBox, Text, Theme, useDesign, useWidth, Utility, Wrap } from "@serchservice/web-ui-kit";
import React from "react";
import NewsDb from "../../../backend/database/NewsDb";
import { RouteInterface } from "../../../configuration/Route";
import Layout from "../../../layout/Layout";
import Title from "../../widgets/Title";
import NewsContent from "../widgets/NewsContent";
import { contently } from "../../../App";

export const NewsListRoute: RouteInterface = {
    path: "/newsroom/news",
    page: <NewsListPage />
}

export default function NewsListPage() {
    const width = useWidth();
    const { isMobile } = useDesign()


    const [isLoading, setIsLoading] = React.useState<boolean>(NewsDb.read.length === 0)
    const [news, setNews] = React.useState<Article[]>([]);
    const [filtered, setFiltered] = React.useState<Article[]>([]);

    React.useEffect(() => {
        if (NewsDb.read.length > 0) {
            setIsLoading(false);
            setNews(NewsDb.sorted);
            setFiltered(news)
        }

        async function fetch() {
            setIsLoading(true)
            const response = await contently.news.all()
            setIsLoading(false)

            if(response) {
                setNews(response)
                NewsDb.set(response)
            }
        }

        fetch()
    }, [ ])

    const render = (): JSX.Element => {
        const displayWidth: string | number = width < 600 ? '100%'
            : width < 1000 ? (width / 2) - 50
            : (width / 3) - 40
        const align = isMobile ? 'center' : 'flex-start';

        if(isLoading) {
            return (
                <Wrap runSpacing={30} spacing={30} crossAxisAlignment={align}>
                    {Utility.itemGenerate(10).map((_, index) => {
                        return <Shimmer key={index} height={300} width={displayWidth} />
                    })}
                </Wrap>
            )
        } else {
            return (
                <Wrap runSpacing={30} spacing={30}>
                    {filtered.map((newsContent, index) => (
                        <NewsContent key={index} news={newsContent} displayWidth={displayWidth} width={width} />
                    ))}
                </Wrap>
            )
        }
    }

    return (
        <Layout type="news">
            <Title title="News" description="Learn about our happenings @Serch" />
            <Container backgroundColor={Theme.primary} padding="88px 66px 144px">
                <Text text="The Press" size={isMobile ? 32 : 54} weight='bold' color={Theme.secondary} />
                <SizedBox height={20} />
                <Text text="Read all about what the press says about Serch" size={22} color={Theme.secondary} />
            </Container>
            <Container backgroundColor={Theme.secondary} padding="24px">
                {render()}
                <Pager items={news} onSlice={setFiltered} itemsPerPage={10} />
            </Container>
        </Layout>
    )
}

// Define action types
// type Action =
//     | { type: "SET_NEWS"; payload: Article[] }
//     | { type: "SET_FILTERED"; payload: Article[] }
//     | { type: "SET_LOADING"; payload: boolean };

// // Define the state type
// interface State {
//     news: Article[];
//     filtered: Article[];
//     isLoading: boolean;
// }

// // Initial state
// const initialState: State = {
//     news: [],
//     filtered: [],
//     isLoading: true,
// };

// // Reducer function
// const reducer = (state: State, action: Action): State => {
//     switch (action.type) {
//         case "SET_NEWS":
//             return { ...state, news: action.payload };
//         case "SET_FILTERED":
//             return { ...state, filtered: action.payload };
//         case "SET_LOADING":
//             return { ...state, isLoading: action.payload };
//         default:
//             return state;
//     }
// };

// const [state, dispatch] = React.useReducer(reducer, initialState);

// React.useEffect(() => {
//     dispatch({ type: "SET_LOADING", payload: true });

//     // Check if data exists in NewsDb
//     if (NewsDb.read.length > 0) {
//       dispatch({ type: "SET_LOADING", payload: false });
//       dispatch({ type: "SET_NEWS", payload: NewsDb.sorted });
//       dispatch({ type: "SET_FILTERED", payload: NewsDb.sorted });
//       return; // Exit the effect early since data is already present
//     }

//     // Fetch from Contentful
//     Contentful.instance.client
//       .getEntries<ContentfulNews>({ content_type: "contentfulNews" })
//       .then((response) => {
//         dispatch({ type: "SET_LOADING", payload: false });
//         if (response.items) {
//           const news = response.items.map((item) => Contentful.buildNews(item));
//           const sortedNews = news.sort((a, b) => b.date.getTime() - a.date.getTime());
//           dispatch({ type: "SET_NEWS", payload: sortedNews });
//           dispatch({ type: "SET_FILTERED", payload: sortedNews });
//           NewsDb.set(sortedNews);
//         }
//       })
//       .catch(() => {
//         dispatch({ type: "SET_LOADING", payload: false });
//       });
//   }, []);