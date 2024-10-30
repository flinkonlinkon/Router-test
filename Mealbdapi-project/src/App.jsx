
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { 	DNA } from 'react-loader-spinner'

function App({router}) {

  let acc = useNavigation()


  return (
    <>
      <NavBar></NavBar>
      {
        acc.state === 'loading' ? <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        /> : ''
      }
      <Outlet></Outlet>
      
       
    </>
  )
}

export default App
