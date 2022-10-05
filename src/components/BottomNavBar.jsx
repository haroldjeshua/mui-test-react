import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import HomeIcon from '@mui/icons-material/HomeRounded'
import FilterListIcon from '@mui/icons-material/FilterListRounded'
import SearchIcon from '@mui/icons-material/SearchRounded'
import LocalMallIcon from '@mui/icons-material/LocalMallRounded'

const BottomNavBar = () => {
	const [value, setValue] = useState('recents')


	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation
				sx={{ width: "100%" }}
				value={value}
				onChange={handleChange}
			>
				<BottomNavigationAction
					size="large"
					label="Home"
					value="home"
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					size="large"
					label="Filter"
					value="filter"
					icon={<FilterListIcon />}
				/>
				<BottomNavigationAction
					size="large"
					label="Search"
					value="search"
					icon={<SearchIcon />}
				/>
				<BottomNavigationAction
					size="large"
					label="Cart"
					value="cart"
					icon={<LocalMallIcon />}
				/>

			</BottomNavigation>
		</Paper>
	)
}

export default BottomNavBar