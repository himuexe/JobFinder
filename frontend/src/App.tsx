import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './pages/FindJobs';
import Layout from './layout/Layout';
import FindTalent from './pages/FindTalent';

export default function App() {
  const theme = createTheme({
    colors: {
      'mine-shaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d'],
      'clairt': ['#fbf5fe', '#f6eafd', '#edd5f9', '#e1b3f4', '#d186ec', '#b957de', '#9f37c2', '#862ba0', '#6f2583', '#5e236c', '#430d50'],
    },
    fontFamily: 'Poppins, sans-serif',
  });

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/find-jobs' element={<Layout><FindJobs /></Layout>} />
        <Route path='/find-talent' element={<Layout><FindTalent/></Layout>} />
        <Route path='*' element={<Layout><HomePage /></Layout>} />
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}