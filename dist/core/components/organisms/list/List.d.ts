import { TableProps } from "../../../index.type";
import { SyncTableProps, AsyncTableProps } from "../table";
declare type ExcludeTypes = 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip' | 'filterPosition';
export declare type ListProps = Omit<TableProps, ExcludeTypes>;
export declare type SyncListProps = Omit<SyncTableProps, ExcludeTypes>;
export declare type AsyncListProps = Omit<AsyncTableProps, ExcludeTypes>;
export declare const List: {
    (props: ListProps): JSX.Element;
    defaultProps: {
        type: string;
        size: string;
        showHead: boolean;
        showMenu: boolean;
        multipleSorting: boolean;
        headerOptions: {};
        withPagination: boolean;
        paginationType: string;
        page: number;
        pageSize: number;
        draggable: boolean;
        data: never[];
        schema: never[];
        loading: boolean;
        error: boolean;
        loaderSchema: never[];
        sortingList: never[];
        filterList: {};
        filterPosition: string;
        searchDebounceDuration: number;
        errorTemplate: (props: import("../table").ErrorTemplateProps) => JSX.Element;
    };
};
export default List;
