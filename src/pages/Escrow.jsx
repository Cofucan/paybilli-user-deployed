import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Shake from "../assets/shake.png";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import profile from "../assets/profile.png";
import wave from "../assets/wave.png";
import AddEvent from "../components/AddEvent";
import AddBettor from "../components/AddBettor";
import { getUserCreatedEvents } from "../redux/userReducer";
import { useMediaQuery } from "react-responsive";
import { BsThreeDots } from "react-icons/bs";
import Navbar from "../components/Navbar";

const Escrow = () => {
  const { loading, userInfo, userEvents } = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const [openTab, setOpenTab] = useState(false);
  const [data, setData] = useState({});
  const [inviteTab, setInviteTab] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 970px)" });
  useEffect(() => {
    dispatch(getUserCreatedEvents({ token, condition: "pending" }));
  }, []);
  
  const columns = [
    {
      field: "serial",
      headerName: "S/N",
      width: isTabletOrMobile ? 260 : 100,
      renderCell: (params) => {
        const index =
          userEvents.findIndex((item) => item.id === params.row.id) + 1;
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
          <BsThreeDots
            onClick={() => setData(params.row)}
            size={24}
            color="white"
            className="bg-[#3FAAE0] cursor-pointer rounded-full p-1 flex items-center justify-center"
          />
        );
      },
    },
  ];

  return (
    <section className="h-[100vh] lg:px-10 p-4 w-[100%] overflow-y-auto">
      <Navbar />
      <div className="flex mt-6 justify-between items-center w-full">
        <h4 className="font-[700] mt-2">Created Bet</h4>
        <button
          onClick={() => setOpenTab(true)}
          className="bg-[#3FAAE0] p-2 rounded-[4px] px-5 text-white font-[500]"
        >
          Create Bet
        </button>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 w-full mt-3 justify-between">
        <div className="flex gap-x-4">
          <button className="bg-[#6F6D6D] p-2 rounded-[4px] px-5 text-white font-[500]">
            Active Created
          </button>
          <button
            onClick={() => setInviteTab(true)}
            className="bg-[#DADADA] p-2 rounded-[4px] px-5 text-white font-[500]"
          >
            Bet History
          </button>
        </div>
        <div className="lg:flex hidden items-center gap-x-2">
          <select className="p-2 px-6 bg-white">
            <option>Bet Type</option>
          </select>
          <div className="bg-white rounded-md">
            <div className="flex px-4 py-2 gap-x-3 items-center">
              <input
                // onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="Enter State"
                className="bg-transparent  pash text-[14px] font-[500] p-1 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white w-full mt-4 h-[600px]">
        {userEvents.length < 1 ? (
          <p className="text-center my-auto mx-auto">
            Nothing to show here now...
          </p>
        ) : (
          <DataGrid
            className="pl-8"
            rows={userEvents}
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
      </div>
      {openTab && <AddEvent setOpenTab={() => setOpenTab(false)} />}
      {Object.keys(data) && Object.keys(data).length > 1 && (
        <AddBettor data={data} setData={() => setData({})} />
      )}{" "}
    </section>
  );
};

export default Escrow;
