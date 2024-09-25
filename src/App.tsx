import { Contently } from "@serchservice/contently";
import * as Uikit from "@serchservice/web-ui-kit";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DataProvider from "./backend/database/DataProvider";
import Keys from "./backend/Keys";
import { RouteInterface } from "./configuration/Route";
import Routing from "./configuration/Routing";
import { GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

export const contently = new Contently({
    space: Keys.CONTENTFUL_SPACE,
    token: Keys.CONTENTFUL_TOKEN,
    withLog: false
})

const ParentPage = () => {
    return (<Outlet />)
}

const renderRoutes = (routes: RouteInterface[]) => {
    return routes.map((route, index) => {
        if (route.children) {
            return (
                <Route key={index} path={route.path} element={<ParentPage />}>
                    <Route index element={route.page} />
                    {renderRoutes(route.children)}
                </Route>
            );
        } else {
            return <Route key={index} path={route.path} element={route.page} />;
        }
    });
};

export default function Main() {
    return (
        <Uikit.WebUiKit>
            <DataProvider>
                <Router>
                    <Uikit.Scroller>
                        <Routes>{renderRoutes(Routing.instance.getAllRoutes())}</Routes>
                    </Uikit.Scroller>
                </Router>
            </DataProvider>
        </Uikit.WebUiKit>
    );
}