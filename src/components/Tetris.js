import Stage from "./Stage";
import Display from "./Display";
import StartBtn from "./StartBtn";

import { createStage } from "../gameHelpers";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartBtn />
      </aside>
    </div>
  );
};

export default Tetris;
