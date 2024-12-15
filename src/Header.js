import React, { useContext } from 'react'
import { FaMobileAlt, FaTable, FaLaptop} from 'react-icons/fa';
import DataContext from './context/DataContext';
const Header = ({title}) => {
  const{width}=useContext(DataContext)
  return (
    <header
    className='Header'
    >
        <h1>{title}<span>{(width)<768?<FaMobileAlt/>:(width)>992?<FaTable/>:<FaLaptop/>}</span></h1>
    </header>
  )
}

export default Header