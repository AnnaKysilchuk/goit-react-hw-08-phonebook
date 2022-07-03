import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from './components/navigation/Navigation';
import { Loader } from './components/loader/Loader';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import { fetchCurrentUser } from './redux/auth/authOperations';

const HomePage = lazy(() =>
    import('./components/pages/homePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const ContactsPage = lazy(() =>
    import('./components/pages/contactsPage/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);
const AddContactPage = lazy(() =>
    import(
        './components/pages/addContactPage/AddContactPage' /* webpackChunkName: "ContactsPage" */
    ),
);
const RegisterPage = lazy(() =>
    import('./components/pages/registerPage/RegisterPage' /* webpackChunkName: "ContactsPage" */),
);
const LoginPage = lazy(() =>
    import('./components/pages/loginPage/LoginPage' /* webpackChunkName: "ContactsPage" */),
);
const NotFoundPage = lazy(() =>
    import('./components/pages/notFoundPage/notFoundPage' /* webpackChunkName: "notFoundPage" */),
);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        <div>
            <header>
                <Navigation />
            </header>
            <main>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="*" element={<Navigate to="login" />} />
                        <Route element={<PublicRoute />}>
                            <Route path="/" element={<HomePage />} />
                        </Route>

                        <Route element={<PublicRoute restricted />}>
                            <Route path="/register" element={<RegisterPage />} />
                        </Route>

                        <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
                            <Route path="/login" element={<LoginPage />} />
                        </Route>

                        <Route element={<PrivateRoute redirectTo="/login" restricted />}>
                            <Route path="/contacts" element={<ContactsPage />} />
                        </Route>

                        <Route element={<PrivateRoute redirectTo="/login" restricted />}>
                            <Route path="/add" element={<AddContactPage />} />
                        </Route>

                        <Route element={<PublicRoute redirectTo="/" />}>
                            <Route element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};

export default App;
