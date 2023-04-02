type Direction = 'ASC' | 'DESC';

export interface Filter {
    search?: string;
    sortBy?: string;
    sortDirection?: Direction;
    page?: number;
    limit?: number;
    offset?: number;
}

export namespace Filter {
    const Default: Filter = {
        search: '',
        sortBy: 'id',
        sortDirection: 'ASC',
        page: 1,
        limit: 10
    };

    export function buildQueryFromQueryParam(queryParams: any): string {
        const filter = {} as Filter;

        if(!!queryParams.search) {
            filter.search = queryParams.search;
        } else {
            filter.search = Default.search;
        }
        if(!!queryParams.sortBy) {
            filter.sortBy = queryParams.sortBy;
        } else {
            filter.sortBy = Default.sortBy;
        }
        if(!!queryParams.sortDirection) {
            filter.sortDirection = queryParams.sortDirection;
        } else {
            filter.sortDirection = Default.sortDirection;
        }
        if(!!queryParams.page && !isNaN(queryParams.page)) {
            
            filter.page = +queryParams.page;
        } else {
            filter.page = Default.page;
        }
        if(!!queryParams.limit && !isNaN(queryParams.limit)) {
            filter.limit = +queryParams.limit;
        } else {
            filter.limit = Default.limit;
        }
        filter.offset = (filter.page - 1) * filter.limit;

        let query = '';
        if (filter.search != ''){
            query = `WHERE user.firstName LIKE '%${filter.search}%' ORDER BY ${filter.sortBy} ${filter.sortDirection} LIMIT ${filter.limit} OFFSET ${filter.offset}`
        } else {
            query = `ORDER BY ${filter.sortBy} ${filter.sortDirection} LIMIT ${filter.limit} OFFSET ${filter.offset}`
        }
        console.log(query);
        return query;

} 
}