import OfflineIndicator from './components/Elements/OfflineIndicator';
import useDarkMode from './hooks/useDarkMode';
import AppRouter from './routes';

const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <OfflineIndicator />
      <AppRouter />
    </div>
  );
};

export default App;
