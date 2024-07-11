import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import GradeForm from './components/GradeForm';
import GradeTable from './components/GradeTable';
import { Container, CssBaseline, Typography, Box } from '@mui/material';

interface Grade {
    id: number;
    studentName: string;
    courseName: string;
    gradeValue: number;
}

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [grades, setGrades] = useState<Grade[]>([]);

    const fetchGrades = async () => {
        const response = await axios.get('https://localhost:7207/api/grades');
        setGrades(response.data);
    };

    useEffect(() => {
        if (authenticated) {
            fetchGrades();
        }
    }, [authenticated]);

    if (!authenticated) {
        return <Login setAuthenticated={setAuthenticated} />;
    }

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4" gutterBottom>
                    Grade Records
                </Typography>
                <GradeForm fetchGrades={fetchGrades} />
                <GradeTable grades={grades} fetchGrades={fetchGrades} />
            </Box>
        </Container>
    );
};

export default App;
