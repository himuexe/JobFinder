import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './pages/FindJobs';
import Layout from './layout/Layout';
import FindTalent from './pages/FindTalent';
import TalentProfile from './pages/TalentProfile';
import PostJob from './pages/PostJob';
import JobDescPage from './pages/JobDescPage';
import ApplyJobPage from './pages/ApplyJobPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';
import JobHistoryPage from './pages/JobHistoryPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const theme = createTheme({
    primaryColor: 'clairt', 
    primaryShade: 4,
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
        <Route path='/jobs' element={<Layout><JobDescPage /></Layout>} />
        <Route path='/apply-job' element={<Layout><ApplyJobPage /></Layout>} />
        <Route path='/posted-jobs' element={<Layout><PostedJobPage  /></Layout>} />
        <Route path='/job-history' element={<Layout><JobHistoryPage /></Layout>} />
        <Route path='/find-talent' element={<Layout><FindTalent/></Layout>} />
        <Route path='/company' element={<Layout><CompanyPage/></Layout>} />
        <Route path='/post-jobs' element={<Layout><PostJob/></Layout>} />
        <Route path='/talent-profile' element={<Layout><TalentProfile/></Layout>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='*' element={<Layout><HomePage /></Layout>} />
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}