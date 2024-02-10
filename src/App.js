import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCream from './components/HooksIceCream';
import { IconContext } from 'react-icons'
import { FaReact} from 'react-icons/fa'
import { MdAudiotrack } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'
import { useState } from 'react';
import Tippy from '@tippy.js/react'
import '@tippy.js/react/dist/tippy-react.umd'
import {Route, Routes} from 'react-router-dom'
import Home from './components/routing/Home';
import About from './components/routing/About';
import OrderSummary from './components/routing/OrderSummary';
import NotFound from './components/routing/NotFound';
import Products from './components/routing/Products';
import FeaturedProducts from './components/routing/FeaturedProducts';
import NewProducts from './components/routing/NewProducts';
import UserDetails from './components/routing/UserDetails';
import Users from './components/routing/Users';
import Admin from './components/routing/Admin';
import ProfilePage from './components/routing/ProfilePage';
import { AuthProvider } from './components/routing/Auth';
import Login from './components/routing/Login';
import RequireAuth from './components/routing/RequireAuth';
import YoutubeForm from './components/formik/YoutubeForm';
import FacebookForm from './components/formik/FacebookForm';
import FormikContainer from './components/formik/FormikContainer';

toast.configure()
Modal.setAppElement('#root')
function App() {

  /*

  :::::::  React Redux ::::::::::::::::

  -> Redux is predictable state container for javascript apps
  -> Redux stores the state of your application
  -> Redux is not tied to react
  -> can be used with Ract, Angular, Vue, VAnilla js


  :::  Why we need redux ??????????  ::::::::::
  
  -> If there are multiple nested components, and we need some state in some of the components
     then we need to either uplift the state or pass down as props to components
  -> Redux stores all states at one place and sends the states to only components that needs it
  
  -> Implement redux directly in react is complex.
  -> React-Redux is official Redux UI binding library for react


  ::::: When to use Redux ?  :::::::

  -> When there are considerable number of components that shares the comman states

  ::::::::::: Three Core concepts :::::::::::::::

  Store   ->  Holds the state of application
  Action  ->  Describes what happened
  Reducer ->   CArries out the state transition  depending on action  

  */

  // react redux

  // return (
  //   <Provider store={store}>
  //     <IconContext.Provider value={{color: 'blue', size:'5rem'}}>
  //       <div className="App">
  //         <FaReact />
  //         <MdAudiotrack />  
  //         <CakeContainer />
  //         <HooksCakeContainer />
  //         <IceCreamContainer />
  //         <HooksIceCream />
  //       </div>
  //     </IconContext.Provider>  
  //   </Provider>
  // );

  //:::::::::::::::::: react icons  ::::::::::::::::::::::::::::::::

  // return (
  //   <IconContext.Provider value={{color: 'blue', size:'5rem'}}>
  //     <div className="App">
  //       <FaReact />
  //       <MdAudiotrack />  
  //       <FaReact color='purple' size='10rem' />
  //       <MdAudiotrack color='purple' size='10rem' />
  //     </div>
  //   </IconContext.Provider>
  // );

  //::::::::::::::::::: react toasts  :::::::::::::::::::::::::
  
  // const notify = () => {
  //   toast('Welcome to Hell', {position: toast.POSITION.BOTTOM_RIGHT})
  //   toast.success('Success ', {position: toast.POSITION.BOTTOM_RIGHT})
  //   toast.info('Info', {position: toast.POSITION.BOTTOM_RIGHT})
  //   toast.warn('warning', {position: toast.POSITION.BOTTOM_RIGHT})
  //   toast.error('Error', {position: toast.POSITION.BOTTOM_RIGHT})
  // }

  // return (
  //   <div>
  //     <button onClick={notify}>Notify!</button>
  //   </div>
  // );

  // :::::::::::::::::::: react modal ::::::::::::::::::::::::::

  // const [modalIsOpen, setModalOpen] = useState(false)

  // return (
  //   <div>
  //     <button onClick={() => setModalOpen(true)}>Open Modal</button>
  //     <Modal 
  //       isOpen={modalIsOpen} 
  //       onRequestClose={() => setModalOpen(false)}
  //       style={
  //         {
  //           overlay: {
  //             backgroundColor: 'gray'
  //           },
  //           content: {
  //             color: 'orange'
  //           }
  //         }
  //       }
  //     >
  //       <h2>Sign Up Modal</h2>
  //       <div>
  //         <button onClick={() => setModalOpen(false)}>Close</button>
  //       </div>
  //     </Modal>
  //   </div>
  // );


  // ::::::::::::::  tooltip ::::::::::::

  // return (
  //   <div>
  //     <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingBottom: '20px'}}>
  //       <Tippy content={'Basic Tooltip'}>
  //         <button>Hover!</button>
  //       </Tippy>
  //     </div>

  //     <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingBottom: '20px'}}>
  //       <Tippy content={<span style={{color:'orange', backgroundColor: 'black'}}>Jinang Shah</span>}>
  //         <button>Hover!</button>
  //       </Tippy>
  //     </div>
  //   </div>
  // );


  // :::::::::::::: routing  :::::::::::::::::::::::::

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/order-summary' element={<OrderSummary />}></Route>
          <Route path='/products' element={<Products />}>
            {/* index ==> to display default child component when navigating to parent component */}
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='/users' element={<Users />} >
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>

          {/* protect route */}
          <Route path='/profile' element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth> }>
          </Route>
          <Route path='/youtube' element={<YoutubeForm />}></Route>
          <Route path='/facebook' element={<FacebookForm />}></Route>
          <Route path='/reusable-form' element={<FormikContainer />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );


}

export default App;
