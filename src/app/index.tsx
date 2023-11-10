import './index.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/home/Home';
import { MainLayout } from 'layouts/mainLayout';
import { AuthLogin } from 'pages/auth/AuthLogin';
import { AuthRegister } from 'pages/auth/AuthRegister';
import { Profile } from 'pages/profile/Profile';
import { useActions } from 'store/hooks/useActions';
import {
  PrivateRouteAuth,
  PrivateRoutePages,
} from 'layouts/privateRoute';
import { Post } from 'pages/post/Post';

function App() {
  const token = window.localStorage.token;
  const { loginRequestAsync } = useActions();
  if (token) loginRequestAsync(token);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Navigate replace to="home" />} />
        <Route element={<PrivateRouteAuth />}>
          <Route
            path="auth"
            element={<Navigate replace to="/auth/login" />}
          />
          <Route path="auth/login" element={<AuthLogin />} />
          <Route path="auth/register" element={<AuthRegister />} />
        </Route>
        <Route element={<PrivateRoutePages />}>
          <Route path="home" element={<Home />} />
          <Route path="profile/:login" element={<Profile />} />
          <Route path="post/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
