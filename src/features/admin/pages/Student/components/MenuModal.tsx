import { useSearchParams } from "react-router-dom";

const MenuModal = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const statusFilter = searchParams.get("statusFilter") || "";
  // const classfilter = searchParams.get("classFilter") ? decodeURIComponent(searchParams.get("classFilter") as string).split(",") : [];

  // const classes = ['1', '2', '3', '4', '5', '6', '7', '8', '9' ,'10']

  // const updateSearch = (value: string) => {
  //   if (!value && search) {
  //     searchParams.delete("search");
  //     setSearchParams(searchParams);
  //   } else {
  //     searchParams.set("page", "1")
  //     searchParams.set("search", value);
  //     setSearchParams(searchParams);
  //   }
  // };

  const updateSort = (value: string) => {
    if (!value && sort) {
      searchParams.delete("sort");
      setSearchParams(searchParams);
    } else {
      searchParams.set("sort", value);
      setSearchParams(searchParams);
    }
  };

  const updateStatusFilter = (value: string) => {
    if (!value && statusFilter) {
      searchParams.delete("statusFilter");
      setSearchParams(searchParams);
    } else {
      searchParams.set("statusFilter", value);
      setSearchParams(searchParams);
    }
  };

  return (

<div className="w-3/12 h-100 p-8 rounded-lg self-start border-2 shadow-sm bg-white space-y-6">
  {/* <h2 className="text-xl font-bold text-primaryText">Search & Filters</h2> */}

  {/* Search Input */}
  {/* <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
    <input
      value={search}
      onChange={(e) => updateSearch(e.target.value)}
      type="text"
      placeholder="Enter student name"
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border-2 text-gray-900 text-base focus:outline-none focus:ring-0"
    />
  </div> */}

  {/* Sort */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Sort by Name</label>
    <select
      value={sort}
      onChange={(e) => updateSort(e.target.value)}
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border-2 text-gray-900 text-base focus:outline-none focus:ring-0"
    >
      <option value="">Sort</option>
      <option value="name-asc">Name - A to Z</option>
      <option value="name-desc">Name - Z to A</option>
    </select>
  </div>

  {/* Filter */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
    <select
      value={statusFilter}
      onChange={(e) => updateStatusFilter(e.target.value)}
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border-2 text-gray-900 text-base focus:outline-none focus:ring-0"
    >
      <option value="">Status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="blocked">Blocked</option>
    </select>
  </div>
</div>

  );
};

export default MenuModal;
