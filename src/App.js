// import './App.css';
import './App.css';
import  React ,{Suspense}from 'react';
import { Route,Link,Routes} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { cyan, teal,lime } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
const LazyHome=React.lazy(()=>import('./componets/home/home'))
const LazyToDo=React.lazy(()=>import('./componets/toDo/toDo'))
const LazyPost=React.lazy(()=>import('./componets/post/post'))
const LazyPoto=React.lazy(()=>import('./componets/photo/photo'))
function App() {
  return (
    <>
    <Box sx={{ display: { xs: 'none', sm: 'block' }, '& :not(style)': { ml: 2} }}>
        <AppBar position="static" sx={{ backgroundColor: teal["500"]}} >
          <Toolbar >
            <Link to="/" underline='none'>
               <Tab label="בית" sx={{color:lime['50'],fontSize:'20px'}}  />
            </Link>
            <Link to="/todo" underline="none" >
             <Tab label="משימות" sx={{color:lime['50'],fontSize:'20px'}}  />
            </Link>
            <Link to="/post" underline="none">
            <Tab label="פוסט" sx={{color:lime['50'],fontSize:'20px'}}  /> 
            </Link>
            <Link to="/photo" underline="none">
             <Tab label="תמונות" sx={{color:lime['50'],fontSize:'20px'}}  /> 
            </Link>
            <Link to="/users" underline="hover">
             <Tab label="משתמשים" sx={{color:lime['50'],fontSize:'20px'}}  /> 
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        {/* מותאם למעלה */}
        <Route path="/"  element={<Suspense fallback={<h1>loading..</h1>}><LazyHome/></Suspense>} />
        <Route path="/toDo"  element={<Suspense fallback={<h1>loading..</h1>}><LazyToDo/></Suspense>} />
        <Route path="/post"  element={<Suspense fallback={<h1>loading..</h1>}><LazyPost/></Suspense>} />
        <Route path="/photo"  element={<Suspense fallback={<h1>loading..</h1>}><LazyPoto/></Suspense>} />
      </Routes>
    </>
      
  );
}

export default App;
