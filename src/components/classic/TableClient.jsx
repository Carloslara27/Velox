"use client"

import * as React from "react"
import {
     ColumnDef,
     ColumnFiltersState,
     SortingState,
     VisibilityState,
     flexRender,
     getCoreRowModel,
     getFilteredRowModel,
     getPaginationRowModel,
     getSortedRowModel,
     useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/(shadcn components)/ui/button"
import { Checkbox } from "@/components/(shadcn components)/ui/checkbox"
import {
     DropdownMenu,
     DropdownMenuCheckboxItem,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/(shadcn components)/ui/dropdown-menu"
import { Input } from "@/components/(shadcn components)/ui/input"
import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
} from "@/components/(shadcn components)/ui/table"
import { Badge } from "../(shadcn components)/ui/badge";
// icons
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
const data = [
     {
          id: "m5gr84i9",
          amount: 316,
          shopping: "6",
          rating: "10",
          ratingUp: true,
          name: "Pedro Silvan",
          email: "ken99@yahoo.com",
          img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
          start_date: "29 Feb 2021",
          end_date: "19 May 2021",
          status:"Active"
     },
     {
          id: "3u1reuv4",
          amount: 242,
          rating: "20",
          ratingUp: false,
          shopping: "2",
          name: "Chart js ",
          email: "Abe45@gmail.com",
          img: "https://www.chartjs.org/docs/latest/favicon.ico",
          start_date: "02 Jun 2021",
          end_date: "29 Jun 2021",
          status:"Inactive"

     },

]



export const columns = [
     {
          id: "select",
          header: ( { table } ) => (
               <Checkbox
                    checked={
                         table.getIsAllPageRowsSelected() ||
                         ( table.getIsSomePageRowsSelected() && "indeterminate" )
                    }
                    onCheckedChange={( value ) => table.toggleAllPageRowsSelected( !!value )}
                    aria-label="Select all"
               />
          ),
          cell: ( { row } ) => (
               <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={( value ) => row.toggleSelected( !!value )}
                    aria-label="Select row"
               />
          ),
          enableSorting: false,
          enableHiding: false,
     },
     {
          accessorKey: "name",
          header: "Client",
          cell: ( { row } ) => (
               <div className="capitalize flex gap-1 items-center">
                    <img src={row.original.img} className="h-[30px] me-3 rounded-full object-cover" alt="FlowBite Logo" />
                    <div className="flex flex-col">
                         <p className="font-semibold">{row.original.name}</p>
                         <span className="text-sm text-zinc-400">{row.original.email}</span>
                    </div>
               </div>
          ),
     },
     {
          accessorKey: "rating",
          cell: ( { row } ) => (
               <div className="flex gap-1 items-center">
                    <span className="font-bold">{row.getValue( "rating" )}</span>
                    {row.original.ratingUp ? <Badge variant="1" className="bg-emerald-200 border-none text-emerald-500 text-[.7rem] px-2 flex items-center gap-1"><FaArrowUpLong className="w-[9px]" /> 1%</Badge>
                         : <Badge variant="1" className="bg-red-200 border-none text-red-500 text-[.7rem] px-2 flex items-center gap-1"><FaArrowDownLong className="w-[9px]" /> 4%</Badge>}
               </div>
          ),
     },
     {
          accessorKey: "shopping",
          cell: ( { row } ) => <div className="lowercase text-zinc-600">{row.getValue( "shopping" )}</div>,
     },
     {
          accessorKey: "start_date",
          header: () => <div>Start date</div>,
          cell: ( { row } ) => <div className="lowercase text-zinc-600">{row.getValue( "start_date" )}</div>,
     },
     {
          accessorKey: "end_date",
          header: () => <div>End date</div>,
          cell: ( { row } ) => <div className="lowercase text-zinc-600">{row.getValue( "end_date" )}</div>,
     },
     {
          accessorKey: "status",
          cell: ( { row } ) => row.getValue( "status" ).includes("Inactive")?<Badge variant="inactive" className="w-fit bg-red-200 border-none text-red-500 text-[.7rem] px-2 flex items-center gap-1"><FaCircle className="w-[6px]"/> {row.getValue( "status" )}</Badge>:
          <Badge variant="inactive" className="w-fit bg-emerald-200 border-none text-emerald-500 text-[.7rem] px-2 flex items-center gap-1"><FaCircle className="w-[6px]"/> {row.getValue( "status" )}</Badge>,
     },
     {
          accessorKey: "amount",
          header: () => <div className="text-right">Amount</div>,
          cell: ( { row } ) => {
               const amount = parseFloat( row.getValue( "amount" ) )

               // Format the amount as a dollar amount
               const formatted = new Intl.NumberFormat( "en-US", {
                    style: "currency",
                    currency: "USD",
               } ).format( amount )

               return <div className="text-right font-medium">{formatted}</div>
          },
     },
     {
          id: "actions",
          enableHiding: false,
          cell: ( { row } ) => {
               const payment = row.original

               return (
                    <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                   <span className="sr-only">Open menu</span>
                                   <MoreHorizontal className="h-4 w-4" />
                              </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem
                                   onClick={() => navigator.clipboard.writeText( payment.id )}
                              >
                                   Copy payment ID
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View customer</DropdownMenuItem>
                              <DropdownMenuItem>View payment details</DropdownMenuItem>
                         </DropdownMenuContent>
                    </DropdownMenu>
               )
          },
     },
]

export function TableClient() {
     const [sorting, setSorting] = React.useState( [] )
     const [columnFilters, setColumnFilters] = React.useState(
          []
     )
     const [columnVisibility, setColumnVisibility] =
          React.useState( {} )
     const [rowSelection, setRowSelection] = React.useState( {} )

     const table = useReactTable( {
          data,
          columns,
          onSortingChange: setSorting,
          onColumnFiltersChange: setColumnFilters,
          getCoreRowModel: getCoreRowModel(),
          getPaginationRowModel: getPaginationRowModel(),
          getSortedRowModel: getSortedRowModel(),
          getFilteredRowModel: getFilteredRowModel(),
          onColumnVisibilityChange: setColumnVisibility,
          onRowSelectionChange: setRowSelection,
          state: {
               sorting,
               columnFilters,
               columnVisibility,
               rowSelection,
          },
     } )

     return (
          <div className="w-full ">
               <div className="flex items-center py-4">
                    <Input
                         placeholder="Filter emails..."
                         value={( table.getColumn( "email" )?.getFilterValue() ) ?? ""}
                         onChange={( event ) =>
                              table.getColumn( "email" )?.setFilterValue( event.target.value )
                         }
                         className="max-w-sm"
                    />
                    <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                              <Button variant="outline" className="ml-auto">
                                   Columns <ChevronDown className="ml-2 h-4 w-4" />
                              </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                              {table
                                   .getAllColumns()
                                   .filter( ( column ) => column.getCanHide() )
                                   .map( ( column ) => {
                                        return (
                                             <DropdownMenuCheckboxItem
                                                  key={column.id}
                                                  className="capitalize"
                                                  checked={column.getIsVisible()}
                                                  onCheckedChange={( value ) =>
                                                       column.toggleVisibility( !!value )
                                                  }
                                             >
                                                  {column.id}
                                             </DropdownMenuCheckboxItem>
                                        )
                                   } )}
                         </DropdownMenuContent>
                    </DropdownMenu>
               </div>
               <div className="rounded-md border">
                    <Table>
                         <TableHeader>
                              {table.getHeaderGroups().map( ( headerGroup ) => (
                                   <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map( ( header ) => {
                                             return (
                                                  <TableHead key={header.id}>
                                                       {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                 header.column.columnDef.header,
                                                                 header.getContext()
                                                            )}
                                                  </TableHead>
                                             )
                                        } )}
                                   </TableRow>
                              ) )}
                         </TableHeader>
                         <TableBody>
                              {table.getRowModel().rows?.length ? (
                                   table.getRowModel().rows.map( ( row ) => (
                                        <TableRow
                                             key={row.id}
                                             data-state={row.getIsSelected() && "selected"}
                                        >
                                             {row.getVisibleCells().map( ( cell ) => (
                                                  <TableCell key={cell.id}>
                                                       {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                       )}
                                                  </TableCell>
                                             ) )}
                                        </TableRow>
                                   ) )
                              ) : (
                                   <TableRow>
                                        <TableCell
                                             colSpan={columns.length}
                                             className="h-24 text-center"
                                        >
                                             No results.
                                        </TableCell>
                                   </TableRow>
                              )}
                         </TableBody>
                    </Table>
               </div>
               <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                         {table.getFilteredSelectedRowModel().rows.length} of{" "}
                         {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                         <Button
                              variant="outline"
                              size="sm"
                              onClick={() => table.previousPage()}
                              disabled={!table.getCanPreviousPage()}
                         >
                              Previous
                         </Button>
                         <Button
                              variant="outline"
                              size="sm"
                              onClick={() => table.nextPage()}
                              disabled={!table.getCanNextPage()}
                         >
                              Next
                         </Button>
                    </div>
               </div>
          </div>
     )
}
