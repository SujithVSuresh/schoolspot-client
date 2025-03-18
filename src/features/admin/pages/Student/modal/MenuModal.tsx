import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

// interface ModalProps {
//   onClose: () => void;
// }

const MenuModal = ({closeSideMenu}: {closeSideMenu: () => void}) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const classfilter = searchParams.get("classfilter") ? decodeURIComponent(searchParams.get("classfilter") as string).split(",") : [];

  const classes = ['1', '2', '3', '4', '5', '6', '7', '8', '9' ,'10']

  const updateSearch = (value: string) => {
    if (!value && search) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
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

  const updateClassFilter = (value: string) => {

    if(classfilter.includes(value)){
      classfilter.splice(classfilter.indexOf(value), 1)
    }else{
      classfilter.push(value)
    }

    if(classfilter.length > 0){
    const urlVal = encodeURIComponent(classfilter.join(","))
    searchParams.set("classfilter", urlVal)
    setSearchParams(searchParams)
    }else{
      searchParams.delete("classfilter");
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
          placeholder="Search..."
          className="w-full border p-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0"
        />

        <select
          value={sort}
          onChange={(e) => updateSort(e.target.value)}
          className="w-full border p-2 mt-5 border-gray-200 rounded-lg focus:outline-none focus:ring-0 bg-white"
        >
          <option value="">Sort</option>
          <option value="name-asc">Name - a to z</option>
          <option value="name-desc">Name - z to a</option>
        </select>

        <div className="flex mt-5 flex-wrap gap-2">
          {classes.map((value, index) => (
          <div key={index} className="bg-gray-100 px-2 rounded-lg">
          <input className="hover: cursor-pointer" checked={classfilter.includes(value) ? true : false} onClick={() => updateClassFilter(value)} type="checkbox" id={value} value={value}/>
          <label htmlFor={value} className="hover: cursor-pointer"> {value}</label>
          </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default MenuModal;
