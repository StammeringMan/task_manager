import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import UserService from "../../services/user.service.js"

const Users = (props) => {




    // fetchAllUsers = () => {
    //     UserService.getAllUsers()
    //     .then((response) => {
    //         console.log(response, "000000000000")
    //     })
    // }


    // const columns = [
    //     { field: 'Sl No.', headerName: '', width: 70 },
    //     { field: 'Name', headerName: 'Name', width: 130 },
    //     { field: 'email', headerName: 'Email', width: 130 },
    //     { field: 'age', headerName: 'Mobile', type: 'number', width: 90 },
    //     { field: 'status', headerName: 'Status', width: 60 },
    // ];

    // const rows = [

    // ]

    // return (
    //     <div style={{ height: 400, width: '100%' }}>
    //         <DataGrid rows={rows} columns={columns} pageSize={5} />
    //     </div>
    // )

}

export default Users