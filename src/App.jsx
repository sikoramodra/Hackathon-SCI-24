import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { useEffect, useState } from 'react';
import generateAgent from './logic/agentGenerator.js';
import generateTask from './logic/taskGenerator.js';
import EndDay from './Components/EndDay.jsx';
import desk from './assets/desk.png';
import EndGame from './Components/EndGame.jsx';

export default function App() {
  const [dayCount, setDayCount] = useState(1);
  const [agentsSize, setAgentsSize] = useState(7);
  const [money, setMoney] = useState(100);
  const [agents, setAgents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [failedTasks, setFailedTasks] = useState(null);
  const [correctTasks, setCorrectTasks] = useState(null);
  const [showEndGame, setShowEndGame] = useState(false);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (money < 0) {
      setShowEndGame(true);
    }
  }, [money]);

  const init = () => {
    setAgents(Array.from({ length: agentsSize }, () => generateAgent(1)));
    setTasks(Array.from({ length: agentsSize }, () => generateTask(1)));
    setMoney(100);
  };

  const generateNextRound = () => {
    setDayCount(dayCount + 1);

    finishedTasks.forEach((element) => {
      let survived = true;
      if (element[1] && element[1].fullName !== null) {
        {
          failedTasks &&
            // eslint-disable-next-line no-unused-vars
            failedTasks.map(([task, agent, score], i) => {
              console.log(agent.fullName);
              if (agent.fullName === element[1].fullName) {
                survived = false;
              }
            });
        }
        if (survived) {
          setAgents((prevAgents) => [...prevAgents, element[1]]);
        }
      }
    });
    setAgentsSize(agents.length);
    setFinishedTasks([]);
    setTasks(
      Array.from({ length: agentsSize }, () =>
        generateTask(generateTaskDifficulty(dayCount)),
      ),
    );
    if (agents.length - 1 < agentsSize) {
      const newgenAgentQuality = generateAgentQuality(dayCount);
      const agentsToGenerate = agentsSize - agents.length - 1;
      let generatedAgents = [];
      for (let i = 0; i < agentsToGenerate; i++) {
        generatedAgents.push(generateAgent(newgenAgentQuality));
      }
      setAgents(agents.concat(generatedAgents));
    }

    setFailedTasks([]);
    setCorrectTasks([]);
  };

  const generateTaskDifficulty = (dayCount) => {
    let difficulty = Math.round(0.9 * dayCount);
    if (difficulty > 20) {
      difficulty = 20;
    }
    return difficulty;
  };

  const generateAgentQuality = (dayCount) => {
    let quality = Math.round(0.7 * dayCount);
    if (quality > 20) {
      quality = 20;
    }
    return quality;
  };

  const addNewAgent = () => {
    setAgents((prevAgents) => [
      ...prevAgents,
      generateAgent(Math.floor(Math.random() * 20) + 1),
    ]);
  };

  return (
    <div
      className="flex w-screen h-screen overflow-auto bg-gray-100 bg-cover"
      style={{ backgroundImage: `url(${desk})` }}
    >
      {tasks.length === 0 ? (
        <EndDay
          finishedTasks={finishedTasks}
          money={money}
          setMoney={setMoney}
          addNewAgent={addNewAgent}
          generateNextRound={generateNextRound}
          failedTasks={failedTasks}
          setFailedTasks={setFailedTasks}
          correctTasks={correctTasks}
          setCorrectTasks={setCorrectTasks}
          showEndGame={showEndGame}
        ></EndDay>
      ) : showEndGame ? (
        <EndGame
          dayCount={dayCount}
          setShowEndGame={setShowEndGame}
          init={init}
        />
      ) : (
        <>
          <div className="w-1/3 h-full">
            <Sidebar
              agents={agents}
              setSelectedAgent={setSelectedAgentIndex}
              selectedAgent={selectedAgentIndex}
            />
          </div>
          <div className="w-full h-full">
            <TaskView
              tasks={tasks}
              agents={agents}
              money={money}
              setMoney={setMoney}
              finishedTasks={finishedTasks}
              setFinishedTasks={setFinishedTasks}
              setAgents={setAgents}
              setTasks={setTasks}
              dayCount={dayCount}
              selectedAgentIndex={selectedAgentIndex}
              setSelectedAgentIndex={setSelectedAgentIndex}
            />
          </div>
        </>
      )}
    </div>
  );
}
