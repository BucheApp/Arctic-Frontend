import './UserHeader.css'
import { Link } from "react-router-dom"

function UserHeader() {
  return (
    <>
    <div>
      <span><Link className="btn select-none" to="./login">ログイン</Link></span>
      <span><Link className="btn select-none" to="./history">履歴</Link></span>
      <span><Link className="btn select-none" to="./cart">カート</Link></span>
      <span><Link className="btn select-none" to="./notifications">通知</Link></span>
    </div>
    </>
  )
}

export default UserHeader