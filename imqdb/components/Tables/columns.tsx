'use client';
import { Quotes } from '@/lib/data';
import { ColumnDef } from '@tanstack/react-table';


export const columns: ColumnDef<Quotes>[] = [
    {
        accessorKey: 'movie',
        header: 'Movie'
    },
    {
        accessorKey: 'quote',
        header: 'Quote'
    },
    {
        accessorKey: 'year',
        header: 'Year'
    },
    {
        accessorKey: 'timestamps',
        header: 'Timestamp'
    },
    {
        accessorKey: 'language',
        header: 'Language'
    },
];