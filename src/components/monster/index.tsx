import { Component } from "react";
import { Monster as MonsterType } from "../../types";
import "./style.css";
interface Props {
  monster: MonsterType;
}
class Monster extends Component<Props> {
  render() {
    const { monster } = this.props;
    return (
      <div className="monster">
        <img
          className="monster__image"
          alt={monster.name}
          src={`https://robohash.org/${monster.id}?set=set2`}
        />
        <h2 className="monster__title"> {monster.name}</h2>
        <p className="monster__email">{monster.email}</p>
      </div>
    );
  }
}

export default Monster;
