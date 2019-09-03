
export const getSorts = (sorts: { sortOrder: 'asc'| 'desc', sortItem: string }) => {
  const { sortOrder, sortItem } = sorts
  return sortOrder === 'asc' ? sortItem : `-${sortItem}`
}
