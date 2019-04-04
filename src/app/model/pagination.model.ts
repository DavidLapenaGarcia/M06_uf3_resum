export class Pagination {

    itemsPerPage: number;
    currentPage: number;
    totalItems: number;

    constructor(totalItems: number, itemsPerPage?, currentPage?) {
        this.itemsPerPage = itemsPerPage;
        this.currentPage = currentPage;
        this.totalItems = totalItems;
    }

    setTotalItems(totalItems): void {
        this.totalItems = totalItems;
    }
    setCurrentPage(currentPage): void {
        this.currentPage = currentPage;
    }
    setItemsPerPage(itemsPerPage): void {
        this.itemsPerPage = itemsPerPage;
    }

    getTotalItems(): number {
        return this.totalItems;
    }
    getItemsPerPage(): number {
        return this.itemsPerPage;
    }
    getCurrentPage(): number {
        return this.currentPage;
    }
}
