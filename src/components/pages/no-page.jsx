import style from './main.module.css'
import { Link } from 'react-router-dom';
export default function NoPage() {
  return (
    <section className={style.page404}>
      <div className={style.container}>
        <div className={style.row}>
          <div>
            <div>
              <div className={style.fourZeroFourBg}>
                <h1>404</h1>
              </div>

              <div className={style.contantBox404}>
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className={style.link404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
