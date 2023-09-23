import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import {Routes, Route} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import Chat from './pages/Chat/index'

const ProtectedRoute = ({ children, auth=false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;

  if(!isLoggedIn && auth) {
    return <Navigate to={'/users/sign_in'} />
  }else if(isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)){
    console.log('object :>> ');
    return <Navigate to={'/'} />
  }

  return children
}
function App() {
  return (
    <Routes>
      <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>}/>;
      <Route path="/" element={<ProtectedRoute auth={true}><Form isSignInPage = {true} /></ProtectedRoute>} />
      <Route path='/users/sign_in' element={<ProtectedRoute isSignInPage={true}><Form isSignInPage = {true} /></ProtectedRoute>} />
      <Route path='/users/sign_up' element={<ProtectedRoute isSignInPage={false}><Form isSignInPage = {false} /></ProtectedRoute>} />
    
    </Routes>
  );
}

export default App;
