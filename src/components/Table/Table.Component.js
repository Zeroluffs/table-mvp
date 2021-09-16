import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function BasicTable() {
  const [test, setTest] = useState(true);
  let column = [];
  if (test) {
    column = [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ];
  } else {
    column = [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
      { title: "Email", field: "email" },
      { title: "Test1", field: "sjdkjd" },
      { title: "Test2", field: "djdkdkd" },
      { title: "Test3", field: "shgsbs" },
    ];
  }
  let data = [
    {
      name: "Mehmet",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 63,
      age: 72,
      email: "nhdbdbd",
      sjdkjd: "djdkdk",
      djdkdkd: "kdkdkld",
      shgsbs: "dbddb90",
    },
    {
      name: "Test ",
      surname: "Anb",
      birthYear: 2017,
      birthCity: 34,
      age: 42,
      email: "cvcfgdckdmd",
      sjdkjd: "djdkdk",
      djdkdkd: "kdkdkld",
      shgsbs: "dbddb90",
    },
  ];

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setTest(!test);
        }}
      >
        Click Me
      </Button>
      <MaterialTable
        icons={tableIcons}
        title="Basic Table"
        columns={column}
        data={data}
        actions={[
          (rowData) => ({
            icon: () => <DeleteOutline />,
            tooltip: "Delete User",
            // onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          filtering: true,
        }}
      ></MaterialTable>
    </div>
  );
}
