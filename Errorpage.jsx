import {Header} from '../components/header';
import {Link} from 'react-router'
import '../components/header.css'
import './ErrorPage.css';

export function ErrorPage(){
  
  return(
    <>
    <title>Error</title>
     <Header />
     <div className ='error'>Page Not found</div>
     <Link to ="*"></Link>

    </>
  );
}