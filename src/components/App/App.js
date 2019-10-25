import React from 'react'
import styles from './App.module.css'
import useSimonSays from '../../hooks/useSimonSays/useSimonSays'
import { BUTTONS } from '../../constants/constants'
import GameButton from '../GameButton/GameButton'
import { chunk } from 'lodash'
import GameText from '../GameText/GameText'

function App() {
  const { onButtonClick, simonSaysState } = useSimonSays()
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <GameText simonSaysState={simonSaysState} />
        <div className={simonSaysState.gameState !== 'SETUP' ? styles.thingybob : undefined}>
        { chunk(simonSaysState.gameButtons, Math.ceil(BUTTONS.length / 3)).map(
            (buttonRow, rowIndex) =>
              <div key={rowIndex}>
                { buttonRow.map(button =>
                    <GameButton key={button.number} button={button} onClick={onButtonClick} />
                  )
                }
              </div>
          )
        }
        </div>
      </header>
    </div>
  );
}

export default App;
