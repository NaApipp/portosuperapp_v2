import KodePos from "../postalcode-components/KodePos";
import SearchAddress from "../postalcode-components/SearchAddress";

export default function PostalCode() {
  return (
    <div className="w-full">
      {/* Search By Addres */}
      <KodePos />
      {/* Search By Postal Code
       */}
      <SearchAddress />
    </div>
  )
}