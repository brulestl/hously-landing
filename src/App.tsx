import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './assets/css/output.css';
// import './assets/css/icons.css';


import Index from "./pages";
import IndexTwo from "./pages/index-two";
import ScrollToTop from "./component/Scroll-top";
import IndexThree from "./pages/index-three";
import IndexFour from "./pages/index-four";
import IndexFive from "./pages/index-five";
import IndexSix from "./pages/index-six";
import IndexSeven from "./pages/index-seven";
import IndexEight from "./pages/index-eight";
import IndexNine from "./pages/index-nine";
import IndexTen from "./pages/index-ten";
import PropertyDetail from "./pages/property-detail";
import PropertyDetailTwo from "./pages/property-detail-two";
import Buy from "./pages/buy";
import Sell from "./pages/sell";
import Aboutus from "./pages/aboutus";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ResetPassword from "./pages/auth/reset-password";
import Comingsoon from "./pages/comingsoon";
import Maintenance from "./pages/maintenance";
import Grid from "./pages/grid";
import GridSidebar from "./pages/grid-sidebar";
import GridMap from "./pages/grid-map";
import List from "./pages/list";
import ListSidebar from "./pages/list-sidebar";
import ListMap from "./pages/list-map";
import Page404 from "./pages/404";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Blogs from "./pages/blogs";
import BlogDetail from "./pages/blog-detail";
import BlogSidebar from "./pages/blog-sidebar";
import Agents from "./pages/agents";
import AgentProfile from "./pages/agent-profile";
import Agencies from "./pages/agencies";
import AgencyProfile from "./pages/agency-profile";

function App() {

  return (
    <>
      <BrowserRouter>
            <ScrollToTop />
            <Routes >
              <Route path="/" element={<IndexNine/>} />
              <Route path="/index" element={<IndexSix />} />
      
              <Route path="/index-two" element={<IndexTwo/>} />
              <Route path="/index-three" element={<IndexThree />} />
      
              <Route path="/index-four" element={<IndexFour />} />
              <Route path="/index-five" element={<IndexFive/>} />
              <Route path="/index-six" element={<IndexSix/>} />
              <Route path="/index-seven" element={<IndexSeven/>} />
              <Route path="/index-eight" element={<IndexEight />} />
              <Route path="/index-nine" element={<IndexNine />} />
              <Route path="/index-ten" element={<IndexTen/>} />
      
              <Route path="/property-detail/:id" element={<PropertyDetail/>} />
              <Route path="/property-detail-two" element={<PropertyDetailTwo/>} />
              <Route path="/buy" element={<Buy/>} />
              <Route path="/sell" element={<Sell/>} />
              <Route path="/aboutus" element={<Aboutus/>} />
              <Route path="/features" element={<Features/>} />
              <Route path="/pricing" element={<Pricing/>} />
              <Route path="/auth-login" element={<Login/>} />
              <Route path="/auth-signup" element={<Signup/>} />
              <Route path="/auth-reset-password" element={<ResetPassword/>} />
              <Route path="/comingsoon" element={<Comingsoon/>} />
              <Route path="/maintenance" element={<Maintenance/>} />
              <Route path="/grid" element={<Grid/>} />
              <Route path="/grid-sidebar" element={<GridSidebar/>} />
              <Route path="/grid-map" element={<GridMap/>} />
      
              <Route path="/list" element={<List/>} />
              <Route path="/list-sidebar" element={<ListSidebar/>} />
              <Route path="/list-map" element={<ListMap/>} />
      
              <Route path="/404" element={<Page404/>} />
              <Route path="/terms" element={<Terms/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/faqs" element={<Faq/>} />
      
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/blog-detail" element={<BlogDetail/>} />
              <Route path="/blog-detail/:id" element={<BlogDetail />} />
              <Route path="/blog-sidebar" element={<BlogSidebar/>} />
      
              <Route path="/agents" element={<Agents/>} />
              <Route path="/agent-profile" element={<AgentProfile/>} />
              <Route path="/agent-profile/:id" element={<AgentProfile/>} />
      
              <Route path="/agencies" element={<Agencies/>} />
              <Route path="/agency-profile" element={<AgencyProfile/>} />
              <Route path="/agency-profile/:id" element={<AgencyProfile/>} />
      
            </Routes>
          </BrowserRouter >
    </>
  )
}

export default App
