import { ChangeEvent, Component, ReactNode } from "react";
import Monsters from "./components/monstersList";
import SearchBox from "./components/searchBar";
import { Monster } from "./types";
import "./App.css";

interface State {
  monsters: Monster[];
  searchTerm: string;
}
interface Props {}
class App extends Component<Props, State> {
  state: Readonly<State> = {
    monsters: [],
    searchTerm: "",
  };
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      searchTerm: e.target.value,
    }));
  };
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => ({
          monsters: users,
        }));
      });
  }

  render(): ReactNode {
    const { monsters, searchTerm } = this.state;
    const { handleChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return (
      <div className="container">
        <h1 className="title">monsters rolodex</h1>
        <SearchBox searchTerm={searchTerm} handleChange={handleChange} />
        <Monsters monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
