'use client';
import { Button } from '../ui/button';
import { DataTable } from '../ui/data-table';
import { Heading } from '../ui/heading';
// import { Separator } from '@/components/ui/separator';
// import { User } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns-contribution';

// interface ProductsClientProps {
//     data: User[];
// }

export const ContributionsTable = ({ data }: any) => {

    const router = useRouter();

    return (
        <>
            <div className="flex items-start justify-between">
                <Heading
                    title={`Contributions (${data.length})`}
                    description="Accept or Decline Contributions"
                />
            </div>
            {/* <Separator /> */}
            <DataTable searchKey="name" columns={columns} data={data} />
        </>
    );
};