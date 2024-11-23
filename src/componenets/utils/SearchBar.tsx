import {useState} from "react";
import {Button} from "flowbite-react";
import SearchIcon from "./icons/SearchIcon.tsx";

export function SearchBar(props: { onSearch: (phrase: string) => void, placeholder: string }) {
  const [searchPhrase, setPhrase] = useState("");

  async function searchSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    try {
      props.onSearch(searchPhrase);
    } catch (error) {
      console.error(error);
    }
  }

  // unfortunately, search bar is not in flowbite-react, so we have to add our own styles
  return (
    <form className="max-w-md mx-auto px-8" onSubmit={searchSubmit}>
      <label htmlFor="default-search"
             className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Wyszukaj</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon/>
        </div>
        <input type="search" id="default-search"
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder={props.placeholder} required
               value={searchPhrase}
               onChange={(e) => setPhrase(e.target.value)}/>
        <div className="absolute end-2.5 bottom-1.5">
          <Button type={"submit"} outline gradientDuoTone="greenToBlue">Wyszukaj</Button>
        </div>
      </div>
    </form>

  )
}