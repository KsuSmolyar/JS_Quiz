import { RouteObject } from "react-router-dom";
import { paths } from "./paths";
import App from "../App";
import { MainPage } from "../pages/mainPage/mainPage";
import { QuizPage } from "../pages/quizPage/quizPage";
import ErrorPage from "../pages/errorPage";


export const routes: RouteObject[] = [
	{
		path: paths.main,
		element: < App/>,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: paths.quiz,
				element: <QuizPage />,
				
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />
	}
];
