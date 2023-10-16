import { Component } from "react";
import { Monster as MonsterType } from "../../types";
import "./style.css";
import Monster from "../monster";
type Props = {
  monsters: MonsterType[];
};
class Monsters extends Component<Props> {
  render() {
    const { monsters } = this.props;
    return (
      <div className="monsters">
        {monsters.map((monster) => (
          <Monster key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default Monsters;
