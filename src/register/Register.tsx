import './Register.css'
import TextInput from './TextInput'

function Register() {
  return (
    <>
      <div className="container">
        <h2 className="center">新規登録</h2>
        <hr />
        <form>
          <h3 className="account-header">アカウント情報</h3>
          <div className="form-group">
            <TextInput id="username" type="text" placeholder="ユーザー名を入力" /><br />
            <TextInput id="email" type="email" placeholder="メールアドレスを入力" /><br />
            <TextInput id="password" type="password" placeholder="パスワードを入力" />
          </div>
          <h3 className="account-header">個人情報</h3>
          <div className="form-group">
            <select className="textbox bottom-space" id="gender">
              <option value="" disabled selected>性別を選択</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
            </select><br />
            <TextInput id="birthdate" type="date" placeholder="生年月日を入力" /><br />
            <TextInput id="occupation" type="text" placeholder="職業を入力" /><br />
            <TextInput id="address" type="text" placeholder="住所を入力" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Register