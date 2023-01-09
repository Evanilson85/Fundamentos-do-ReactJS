import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './avatar';
import style from './comment.module.css';

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/Evanilson85.png" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Evanilson Manoel</strong>
              <time title='12 de abril as 8:13' dateTime='2022-05-11 08:12:12' >Cerca de 1h atrás</time>
            </div>
            <button title='Deletar cometario'>
              {/* <Trash size={20}/> */}
              <Trash size={24} />
            </button>
          </header>
          <p>
            muito bom dev parabens
          </p>
        </div>
        <footer>
          <button>
          <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}