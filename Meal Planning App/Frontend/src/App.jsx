import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage.jsx';
import IngredientPage from './pages/IngredientPage.jsx';
import MealsPage from './pages/MealsPage.jsx';
import PlanPage from './pages/PlanPage.jsx';
import UserDetailsPage from './pages/UserDetailsPage.jsx';
import ShoppingPage from './pages/ShoppingPage.jsx';
import RequireAuth from './auth/RequireAuth.jsx';

const App = () => {

  return (
    <div className="App" data-theme="cupcake">
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Nested routes for UserPage and its sub-pages TODO: Protected routing */}
        <Route path="/" element={<RequireAuth />} >
          <Route path="ingredients" element={<IngredientPage />} />
          <Route path="meals" element={<MealsPage />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="userdetails" element={<UserDetailsPage />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
