import './styles/index.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { JobFilterProvider } from './context/JobFilterContext';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';
import { Loader } from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Jobs = lazy(() => import('./pages/Jobs'));
const JobDescription = lazy(() => import('./pages/JobDescription'));
const JobApplication = lazy(() => import('./pages/JobApplication'));
const PostJob = lazy(() => import('./pages/PostJob'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Join = lazy(() => import('./pages/Join'));
const SignIn = lazy(() => import('./pages/SignIn'));
function App() {
  return (
    <UserProvider>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="join" element={<Join />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="jobs"
              element={
                <JobFilterProvider>
                  <Jobs />
                </JobFilterProvider>
              }
            />

            <Route path="jobs/:category/:id" element={<JobDescription />} />
            <Route
              path="jobs/:category/:id/apply"
              element={
                <ProtectedRoute>
                  <JobApplication />
                </ProtectedRoute>
              }
            />
            <Route path="post-a-job" element={<PostJob />} />
            <Route path="contact" element={<Contact />} />
             <Route path="privacy-policy" element={<Privacy />} />
             </Route>
        </Routes>
      </Suspense>
    </UserProvider>
  );
}

export default App;