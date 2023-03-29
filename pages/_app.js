import '../styles/globals.css'
import React from 'react'
import {Layout} from '../components';
import {StateContext} from '../context/StateContext';
import {toaster} from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
        <Layout>
             <Component {...pageProps} />
        </Layout>     
    </StateContext>
    
  )

}

export default MyApp
