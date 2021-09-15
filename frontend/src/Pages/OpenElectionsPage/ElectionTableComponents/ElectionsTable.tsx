import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {CustomSearchBar} from "./CustomSearchBar";
import {Chip} from "@material-ui/core";


interface Column {
    id: 'election' | 'type' | 'votes' | 'status';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {id: 'election', label: 'Election', minWidth: 170},
    {id: 'type', label: 'Type', minWidth: 100},
    {
        id: 'votes',
        label: 'Votes',
        minWidth: 170,
        align: 'right',

    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',

    },

];


interface Data {
    election: string;
    type: 'REFERENDUM' | 'CANDIDATES' | 'MULTIPLE CHOICE';
    votes: number;
    status: 'OPEN' | 'CLOSED';

}


function createData(election: string, type: 'REFERENDUM' | 'CANDIDATES' | 'MULTIPLE CHOICE', votes: number, status: 'OPEN' | 'CLOSED'): Data {

    return {election, type, votes, status};
}

const rows = [
    createData('India', 'REFERENDUM', 1324171354, 'OPEN'),
    createData('China', 'CANDIDATES', 1403500365, 'CLOSED'),
    createData('Italy', 'CANDIDATES', 60483973, 'OPEN'),
    createData('United States', 'MULTIPLE CHOICE', 327167434, 'CLOSED'),
    createData('Canada', 'REFERENDUM', 37602103, 'CLOSED'),

];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function ElectionsTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <CustomSearchBar/>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, id) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];

                                        if (column.id === 'status') {
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Chip
                                                        label={value}
                                                        style={{backgroundColor: value === 'OPEN' ? '#4caf50' : '#f44336', width:80}}/>
                                                </TableCell>
                                            )

                                        }
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}


