'use client';
import { ColumnDef } from '@tanstack/react-table';
// import { CellAction } from './cell-action';
// import { User } from '@/constants/data';
import { Checkbox } from '../ui/checkbox';

export const columns = [
    {
        id: 'select',
        header: ({ table }: any) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }: any) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'message',
        header: 'Mesage'
    }
    //   {
    //     id: 'actions',
    //     cell: ({ row }) => <CellAction data={row.original} />
    //   }
];