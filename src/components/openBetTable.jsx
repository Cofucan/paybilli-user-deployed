import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import JoinEvent from './JoinEvent';
import { useDispatch, useSelector } from 'react-redux';
import { getOpenBets } from '../redux/userReducer';
import { useMediaQuery } from 'react-responsive';

export default function OpenBetTable() {

    const { loading, userInfo, openBets } = useSelector((state) => state.user);
    const token = sessionStorage.getItem("token");
    const dispatch = useDispatch();

    const [openTab, setOpenTab] = useState(false);
    const [data, setData] = useState({});
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 970px)" });
    useEffect(() => {
        dispatch(getOpenBets(token));
        // dispatch(getUserCreatedEvents({ token, condition: "open" }));
    }, []);

    const clickHandler = (item) => {
        setData(item)
        setOpenTab(true)
    }

    const columns = [
        {
            field: "serial",
            headerName: "S/N",
            width: isTabletOrMobile ? 260 : 100,
            renderCell: (params) => {
                const index =
                    openBets.findIndex((item) => item.id === params.row.id) + 1;
                return (
                    <p className="text-[15px] text-[#1c1c1c] font-[500]">
                        {index || "-- --"}
                    </p>
                );
            },
        },

        {
            field: "name",
            headerName: "Event Name",
            width: isTabletOrMobile ? 260 : 280,
            renderCell: (params) => {
                return (
                    <p className="text-[14px] text-[#1c1c1c] truncate font-[500]">
                        {params.row.event_name || "-- --"}
                    </p>
                );
            },
        },
        {
            field: "start_date",
            headerName: "Date Created",
            width: isTabletOrMobile ? 280 : 190,
            renderCell: (params) => {
                const date = new Date(params.row.created_at);
                const year = date.getFullYear();
                const month =
                    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
                return (
                    <p className="text-[14px] text-[#1c1c1c] font-[500] ">
                        {day}-{month}-{year}
                    </p>
                );
            },
        },
        {
            field: "win_term",
            headerName: "Wining Term",
            width: isTabletOrMobile ? 280 : 240,
            renderCell: (params) => {
                return (
                    <p className="text-[14px] text-[#1c1c1c] font-[500]">
                        {params.row.win_condition || "-- --"}
                    </p>
                );
            },
        },

        {
            field: "due_date",
            headerName: "Due Date",
            width: isTabletOrMobile ? 260 : 180,
            renderCell: (params) => {
                return (
                    <p className="text-[14px] text-[#3a3a3a] font-[500]">
                        {params.row.due_date || "-- --"}
                    </p>
                );
            },
        },

        {
            field: "type",
            headerName: "Bet Type",
            width: isTabletOrMobile ? 260 : 140,
            renderCell: (params) => {
                // const id = params.row.id;
                return (
                    <>
                        <p className="text-[14px] text-[#1c1c1c] font-[500]">
                            {params.row.bet_type || "-- --"}
                        </p>
                    </>
                );
            },
        },
        {
            field: "amount",
            headerName: "Amount",
            width: isTabletOrMobile ? 260 : 120,
            renderCell: (params) => {
                const id = params.row.id;

                return (
                    <>
                        <p className="text-[14px] text-[#1c1c1c] font-[500]">
                            {params.row.amount || "-- --"}
                        </p>
                    </>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: isTabletOrMobile ? 260 : 120,
            renderCell: (params) => {
                // const id = params.row.id;

                return (
                    <div role='button' onClick={() => clickHandler(params.row)} >
                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.652832" width="36.8377" height="36.8377" rx="18.4188" fill="#3FABDA" />
                            <path d="M27.9832 11.0437L26.6593 10.4987V19.2864L29.0601 13.5836C29.4652 12.591 29.0008 11.4524 27.9832 11.0437ZM8.71785 14.6444L13.6182 26.2738C13.7625 26.6276 14.0086 26.9322 14.3263 27.1501C14.644 27.3679 15.0194 27.4895 15.4064 27.5C15.6633 27.5 15.93 27.4513 16.1869 27.3443L23.4682 24.3761C24.2092 24.0744 24.6636 23.3543 24.6834 22.6341C24.6933 22.3811 24.6439 22.0989 24.555 21.8459L19.6151 10.2165C19.4755 9.8603 19.2302 9.55379 18.9113 9.33683C18.5924 9.11987 18.2145 9.0025 17.8269 9C17.57 9 17.3132 9.05839 17.0662 9.14598L9.79474 12.1142C9.31139 12.3091 8.92643 12.6852 8.72449 13.1597C8.52255 13.6341 8.52016 14.1682 8.71785 14.6444ZM24.6735 10.9463C24.6735 10.4301 24.4653 9.93508 24.0948 9.57007C23.7242 9.20506 23.2216 9 22.6976 9H21.265L24.6735 17.1163" fill="white" />
                        </svg>
                    </div>
                );
            },
        },
    ];

    return (

        <div className="flex bg-white w-full mt-4 h-[600px]">
            {openBets.length < 1 ? (
                <p className="text-center my-auto mx-auto">
                    Nothing to show here now...
                </p>
            ) : (
                <DataGrid
                    className="pl-8"
                    rows={openBets}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 9, page: 0 },
                        },
                    }}
                    autoHeight
                    rowHeight={64}
                    // checkboxSelection
                    // getRowId={(row) => row._id}
                    style={{ border: "none" }}
                    pageSizeOptions={[5, 10, 25]}
                // onRowSelectionModelChange={setSelectedUsers}
                />
            )}
            {openTab && (
                <JoinEvent data={data} setData={() => setData({})} setOpenTab={() => setOpenTab(false)} />
            )}
        </div>
    )
}
