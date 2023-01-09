import style from './Post.module.css'
import { Comment} from './comment.jsx'
import { Avatar } from './avatar'

export function Post () {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar hasBorder={true} src="https://github.com/Evanilson85.png" />
          <div className={style.authorInfo}>
            <strong>Evanilson Manoel</strong>
            <span>Web Developér</span>
          </div>
        </div>

        <time title='12 de abril as 8:13' dateTime='2022-05-11 08:12:12' >Publicado há 1h</time>
      </header>

      <div className={style.content}>
        <p> 
          Fala galeraa 👋
        </p> 
        <p> 
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p> 
        <p> 
          👉{' '}<a href=""> jane.design/doctorcare</a>
        </p> 
        <p> 
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={style.form}>
        <strong>Deixe o seu FeedBack</strong>
        <textarea className='' placeholder='Deixe o seu comentario' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <Comment />
      <Comment />
      <Comment />
    </article>
  )
}