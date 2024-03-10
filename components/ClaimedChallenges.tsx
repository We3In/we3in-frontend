import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ClaimedChallenges = () => {
  return (
    <Table className="w-3/4 mx-auto mt-10">
      <TableCaption>A list of your recent claimed challenges.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium py-5">Superteam Hackaton</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Airdrop</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ClaimedChallenges;
