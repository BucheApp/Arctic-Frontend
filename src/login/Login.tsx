import './Login.css'
import TextInput from '../TextInput'
import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <div className="container">
        <h2 className="center">ログイン</h2>
        <hr />
        <form>
          <h3 className="account-header">アカウント情報</h3>
          <div className="form-group">
            <TextInput id="name" type="text" placeholder="ユーザー名/メールアドレスを入力" /><br />
            <TextInput id="password" type="password" placeholder="パスワードを入力" />
          </div>
          <h3 className="account-header">登録</h3>
          <div className="form-group">
            <span>まだ、登録をしていない場合は、以下から登録してください。</span>
            <div className="link"><Link to="/register">登録ページへ</Link></div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login