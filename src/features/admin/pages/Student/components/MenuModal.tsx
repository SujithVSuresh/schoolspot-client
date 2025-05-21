import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const MenuModal = ({closeSideMenu}: {closeSideMenu: () => void}) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const statusFilter = searchParams.get("statusFilter") || "";
  const classfilter = searchParams.get("classFilter") ? decodeURIComponent(searchParams.get("classFilter") as string).split(",") : [];

  const classes = ['1', '2', '3', '4', '5', '6', '7', '8', '9' ,'10']

  const updateSearch = (value: string) => {
    if (!value && search) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
      searchParams.set("page", "1")
      searchParams.set("search", value);
      setSearchParams(searchParams);
    }
  };

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

  const updateClassFilter = (value: string) => {
    if(classfilter.includes(value)){
      classfilter.splice(classfilter.indexOf(value), 1)
    }else{
      classfilter.push(value)
    }

    if(classfilter.length > 0){
    searchParams.set("page", "1")
    const urlVal = encodeURIComponent(classfilter.join(","))
    searchParams.set("classFilter", urlVal)
    setSearchParams(searchParams)
    }else{
      searchParams.delete("classFilter");
      setSearchParams(searchParams);
    }
  }
  return (
    <div className="bg-white h-full w-8/12 md:w-3/12 lg:w-3/12 fixed z-40 right-0">
      <div className="flex border-b px-5 items-center w-full h-16">
        <X onClick={() => closeSideMenu()} className="hover: cursor-pointer"/>
      </div>

      <div className="h-full p-5">
      <input
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          type="text"
          placeholder="Search name..."
          className="w-full border p-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0"
        />

       <div className="mt-5">
        <span className="text-sm text-gray-600">Sort by Name</span>
        <select
          value={sort}
          onChange={(e) => updateSort(e.target.value)}
          className="w-full border mt-2 p-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 bg-white"
        >
          <option value="">Sort</option>
          <option value="name-asc">Name - a to z</option>
          <option value="name-desc">Name - z to a</option>
        </select>
        </div>


        <div className="mt-5">
        <span className="text-sm text-gray-600">Filter by Status</span>
        <select
          value={statusFilter}
          onChange={(e) => updateStatusFilter(e.target.value)}
          className="w-full border mt-2 p-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 bg-white"
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blocked">Blocked</option>
        </select>
        </div>

        <div className="mt-5">
        <span className="text-sm text-gray-600">Filter by Class</span>
        <div className="flex flex-wrap gap-2 mt-2">
        
          {classes.map((value, index) => (
          <div key={index} className="bg-gray-100 px-2 rounded-lg">
          <input className="hover: cursor-pointer" checked={classfilter.includes(value) ? true : false} onClick={() => updateClassFilter(value)} type="checkbox" id={value} value={value}/>
          <label htmlFor={value} className="hover: cursor-pointer"> {value}</label>
          </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  );
};

export default MenuModal;
