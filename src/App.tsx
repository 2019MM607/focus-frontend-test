import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './app/redux-hooks';
import { AppRouter } from './routing/AppRouter';
import { useEffect } from 'react';
import { autoLogin } from './redux/slice/auth.slice';

function App() {
    const dispatch = useAppDispatch();

    const whoAmI = async () => {
        dispatch(autoLogin());
    };
    useEffect(() => {
        whoAmI();
    }, []);
    return <AppRouter />;
}

export default App;
