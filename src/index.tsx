import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store'

import { App } from './App';
import './firebase'
import 'antd/dist/antd.css';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);

