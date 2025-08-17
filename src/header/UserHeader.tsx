import './UserHeader.css'

function UserHeader() {
  return (
    <>
    <div>
      <span><a className="btn select-none" href="./login">ログイン</a></span>
      <span><a className="btn select-none" href="./history">履歴</a></span>
      <span><a className="btn select-none" href="./cart">カート</a></span>
      <span><a className="btn select-none" href="./notifications">通知</a></span>
    </div>
    </>
  )
}

export default UserHeader