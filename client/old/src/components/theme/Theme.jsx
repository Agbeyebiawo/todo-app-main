import { useEffect } from "react"
import { TodoProvider } from "../../context/TodoContext"
import { useContext } from "react"
import LightIcon from '../../assets/images/icon-sun.svg'
import DarkIcon from '../../assets/images/icon-moon.svg'

const Theme = () => {
    const {theme,setTheme} = useContext(TodoProvider)
    const themeToggler = ()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    useEffect(()=>{
        if(theme === 'dark'){
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme')
        }else if(theme === 'light'){
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme')
        }
    },[themeToggler])
    return (
    <button type="button" onClick={themeToggler} className="themeBtn">{theme === 'light' ? (
        <img src={LightIcon} alt="light theme" className="themeIcon"/>
    ) : (
        <img src={DarkIcon} alt="dark theme" className="themeIcon"/>
    )}</button>
  )
}

export default Theme