import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TopBar from './components/TopBar'
import HomePage from './pages/Home';
import Quiz from './pages/Quiz';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
       <button onClick={signOut}>Sign out</button>
       <TopBar />
       <HomePage />
       
    </div>
  );
}

export default withAuthenticator(App);
