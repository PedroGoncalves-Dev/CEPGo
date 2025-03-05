import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEnderecoContext } from "@/hooks/useEnderecoContext";
import { JSX } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const NumerosPaginas = (): JSX.Element => {
    const paginaAtual = table.getState().pagination.pageIndex;
    const totalPaginas = table.getPageCount();
    const paginaOpcoes = table.getPageOptions();

    let paginaParaMostrar = [];

    if (totalPaginas <= 3) {
      paginaParaMostrar = paginaOpcoes;
    } else if (paginaAtual <= 1) {
      paginaParaMostrar = [0, 1, 2];
    } else if (paginaAtual >= totalPaginas - 2) {
      paginaParaMostrar = [
        totalPaginas - 3,
        totalPaginas - 2,
        totalPaginas - 1,
      ];
    } else {
      paginaParaMostrar = [paginaAtual - 1, paginaAtual, paginaAtual + 1];
    }

    return (
      <>
        {paginaParaMostrar.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => table.setPageIndex(page)}
              isActive={paginaAtual === page}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </>
    );
  };

  const { enderecos } = useEnderecoContext();

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-slate-500 hover:bg-slate-500"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center opacity-55"
                >
                  {enderecos.length > 0
                    ? "Nenhum endereço encontrado"
                    : "Nenhum endreço cadastrado"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              variant={"outline"}
              className="border-0 shadow-none"
              size={"sm"}
            >
              {" "}
              <ChevronLeft />
              <span className="hidden sm:inline">Anterior</span>
            </Button>
          </PaginationItem>

          <NumerosPaginas />

          <PaginationItem className="">
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              variant={"outline"}
              className="border-0 shadow-none"
              size={"sm"}
            >
              <span className="hidden sm:inline">Próxima</span>
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
