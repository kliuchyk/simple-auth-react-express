import { Dashboard, Preferences, Login } from './components';
import { useRoutes } from 'react-router-dom';
import { useToken } from './useToken';

function App() {
  const { token, setToken } = useToken();

  let element = useRoutes([
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
    { path: 'preferences', element: <Preferences /> },
  ]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className='App'>
      <h1>Application</h1>
      {element}
    </div>
  );
}

export default App;
