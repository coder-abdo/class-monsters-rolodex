import { ChangeEvent, Component } from "react";
import "./style.css";
interface Props {
  searchTerm: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
class SearchBox extends Component<Props> {
  render() {
    const { searchTerm, handleChange } = this.props;
    return (
      <input
        type="search"
        className="search-box"
        placeholder="Search Monster"
        value={searchTerm}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
