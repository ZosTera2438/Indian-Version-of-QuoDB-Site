"use strict";

import React, {
    useMemo,
    useState,
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
    ColDef,
    ModuleRegistry,
} from "@ag-grid-community/core";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const QuoteTable = ({ rowData }: { rowData: any }) => {
    console.log(rowData)
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {
            field: "movie",
            minWidth: 170,
        },
        { field: "quote" },
        { field: "year" },
        { field: "timestamps" },
        { field: "language" },
    ]);
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            editable: true,
            filter: true,
            flex: 1,
            minWidth: 100,
        };
    }, []);


    return (
        <div style={containerStyle}>
            <div
                style={gridStyle}
                className={
                    "ag-theme-quartz"
                }
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={20} 
                />
            </div>
        </div>
    );
};

