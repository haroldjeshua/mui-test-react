import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const FloatingActionButtons = () => {
  return (
    <div className="fabContainer">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
    </div>
  )
}

export default FloatingActionButtons