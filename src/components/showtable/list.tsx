import React from "react";
import { IResourceComponentsProps, useNavigation, GetManyResponse, useMany,} from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
export const History: React.FC<any> = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "0",
        accessorKey: "id",
        header: "ລຳດັບ",
      },
      {
        id: "1",
        accessorKey: "paiy",
        header: "ປ້າຍລົດ",
      },
      {
        id: "2",
        accessorKey: "brand",
        header: "ຍີ່ຫໍ້ລົດ",
      },
      {
        id: "3",
        accessorKey: "color",
        header: "ສີລົດ",
      },
      {
        id: "4",
        accessorKey: "typepaiy",
        header: "ປະເພດສີປ້າຍ",
      },
      {
        id: "5",
        accessorKey: "province",
        header: "ແຂວງ",
      },
      {
        id: "6",
        accessorKey: "time",
        header: "ເວລາລ່ວງລະເມີດ",
      },
      {
        id: "action",
        accessorKey: "action",
        header: "ເບິ່ງ",

        cell: function render({ getValue, }) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <button
                onClick={() => {
                  show("MakeData", getValue() as string);
                }}
              >
                Show
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  const { edit, show, create } = useNavigation();
  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      tableQueryResult: { data: tableData },
    },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
    getColumn,
  } = useTable({
    // data: MakeData,
    columns,
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <div>
      <div className="">
        <table className="">
          <thead className="">
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className=""
                  >
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className=""
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className=""
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
