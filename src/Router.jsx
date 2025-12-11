import { Routes, Route, Form } from "react-router";
import RickMorty from "./pages/RickMorty";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProductsRedux from "./pages/ProductsRedux";
import Login from "./pages/Login";
import DetailRickMorty from "./pages/DetailRickMorty";
import LoginTestContext from "./pages/LoginTestContext";
import SurveyPerokok from "./pages/SurveyPerokok";
import MainLayout from "./layouts/MainLayout";
import RickMortyLayout from "./layouts/LoginLayout";
import LoginLayout from "./layouts/LoginLayout";
import EditProductRedux from "./components/EditProductRedux";

function Router() {
  /// => app
  // Todolist => Todoist
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="rickmorty">
          <Route index element={<RickMorty />} />
          <Route path=":id/:slug" element={<DetailRickMorty />} />
        </Route>
        <Route path="products">
          <Route index element={<ProductsRedux />} />
          <Route path=":id/" element={<EditProductRedux />} />
        </Route>
        <Route path="survey" element={<SurveyPerokok />} />
      </Route>

      <Route path="auth/signin">
        <Route index element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
