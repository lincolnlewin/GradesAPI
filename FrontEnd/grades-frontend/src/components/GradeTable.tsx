import React from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

interface Grade {
    id: number;
    studentName: string;
    courseName: string;
    gradeValue: number;
}

const GradeTable = ({ grades, fetchGrades }: { grades: Grade[], fetchGrades: () => void }) => {
    const handleDelete = async (id: number) => {
        await axios.delete(`https://localhost:7207/api/grades/${id}`);
        fetchGrades();
    };

    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {grades.map((grade) => (
                        <TableRow key={grade.id}>
                            <TableCell>{grade.studentName}</TableCell>
                            <TableCell>{grade.courseName}</TableCell>
                            <TableCell>{grade.gradeValue}</TableCell>
                            <TableCell align="right">
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => handleDelete(grade.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GradeTable;
