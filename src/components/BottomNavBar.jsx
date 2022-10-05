import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FilterListIcon from '@mui/icons-material/FilterList'
import SearchIcon from '@mui/icons-material/SearchIcon'
import LocalMallIcon from '@mui/icons-material/LocalMall'

const BottomNavBar = () => {
    const [value, setValue] = useState('recents')


    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <div>BottomNavBar</div>
  )
}

export default BottomNavBar