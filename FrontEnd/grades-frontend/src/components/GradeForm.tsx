import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const GradeForm = ({ fetchGrades }: { fetchGrades: () => void }) => {
    const [studentName, setStudentName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [gradeValue, setGradeValue] = useState<number | string>('');
    const [errors, setErrors] = useState<{ studentName?: string, courseName?: string, gradeValue?: string }>({});

    const validate = () => {
        let tempErrors: { studentName?: string, courseName?: string, gradeValue?: string } = {};

        if (!studentName) tempErrors.studentName = 'Student name is required';
        if (!courseName) tempErrors.courseName = 'Course name is required';
        if (gradeValue === '') {
            tempErrors.gradeValue = 'Grade is required';
        } else if (typeof gradeValue === 'number' && (gradeValue < 0 || gradeValue > 100)) {
            tempErrors.gradeValue = 'Grade must be between 0 and 100';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            await axios.post('https://localhost:7207/api/grades', { studentName, courseName, gradeValue });
            fetchGrades();
            setStudentName('');
            setCourseName('');
            setGradeValue('');
            setErrors({});
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                fullWidth
                label="Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                margin="normal"
                error={!!errors.studentName}
                helperText={errors.studentName}
            />
            <TextField
                fullWidth
                label="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                margin="normal"
                error={!!errors.courseName}
                helperText={errors.courseName}
            />
            <TextField
                fullWidth
                label="Grade"
                type="number"
                value={gradeValue}
                onChange={(e) => setGradeValue(Number(e.target.value))}
                margin="normal"
                error={!!errors.gradeValue}
                helperText={errors.gradeValue}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add Grade
            </Button>
        </Box>
    );
};

export default GradeForm;
