import './Register.css'
import TextInput from '../TextInput'
import ValidationError from '../ValidationError'
import Submit from '../Submit'
import React,{ useRef,useContext } from 'react'
import useSWR from 'swr'
import ApiInfoContext from '../main'

function Register() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const birthdateRef = useRef<HTMLInputElement>(null);
  const occupationRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const usernameErrorRef = useRef<HTMLSpanElement>(null);
  const emailErrorRef = useRef<HTMLSpanElement>(null);
  const passwordErrorRef = useRef<HTMLSpanElement>(null);

  const apiInfo = useContext(ApiInfoContext);

  const handleUserNameChange = () => {
    const username:string = usernameRef.current?.value || "";
    const regexp:RegExp = new RegExp("^[!'()\\-=~`*:?\\p{L}\\p{N}]*$","u");
    checkTextInput(1,30,regexp,username,"username",usernameErrorRef);
  };

  const handleEmailChange = () => {
    const email:string = emailRef.current?.value || "";
    const regexp = new RegExp("^[a-zA-Z\\d]$");
    checkTextInput(1,255,regexp,email,"email",emailErrorRef);
  };

  const handlePasswordChange = () => {
    const password:string = passwordRef.current?.value || "";
    const regexp = new RegExp("^[a-zA-Z\\d]$");
    checkTextInput(8,18,regexp,password,"password",passwordErrorRef);
  };

  function checkTextInput(max:number,min:number,regexp:RegExp,text:string,action:string,ref:React.RefObject<HTMLSpanElement | null>) {
    var message:string = "";

    if(text === "") {
      //pass
    } else if(text.length >= min) {
      message = `${min}文字以上にしてください`;
    } else if(text.length <= max) {
      message = `${max}文字以下にしてください`;
    } else if(regexp.test(message)) {
      message = "指定の表記にマッチしませんでした";
    } else {
      const fetcher = (url : string) => fetch(url).then(res => res.text());
      const { data } = useSWR(apiInfo["baseURL"] + "/check/" + action,fetcher);
      message = data ?? "不明なエラーが発生しました";
    }

    if(ref && ref.current) {
      ref.current.textContent = message;
    }
  }

  const handleSubmit = () => {
    console.log("Test");
  };

  return (
    <>
      <div className="container">
        <h2 className="center">新規登録</h2>
        <hr />
        <form>
          <h3 className="account-header">アカウント情報</h3>
          <div className="form-group">
            <TextInput id="username" type="text" placeholder="ユーザー名を入力" ref={usernameRef} handle={handleUserNameChange} /><br />
            <ValidationError ref={usernameErrorRef} />
            <TextInput id="email" type="email" placeholder="メールアドレスを入力" ref={emailRef} handle={handleEmailChange} /><br />
            <ValidationError ref={emailErrorRef} />
            <TextInput id="password" type="password" placeholder="パスワードを入力" ref={passwordRef} handle={handlePasswordChange} />
            <ValidationError ref={passwordErrorRef} />
          </div>
          <h3 className="account-header">個人情報</h3>
          <div className="form-group">
            <select className="textbox bottom-space" id="gender" defaultValue="">
              <option value="" disabled>性別を選択</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
            </select><br />
            <TextInput id="birthdate" type="date" placeholder="生年月日を入力" ref={birthdateRef} /><br />
            <TextInput id="occupation" type="text" placeholder="職業を入力" ref={occupationRef} /><br />
            <TextInput id="phone" type="tel" placeholder="電話番号を入力" ref={phoneRef} /><br />
            <TextInput id="address" type="text" placeholder="住所を入力" ref={addressRef} />
          </div>
          <div>
            <Submit handle={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Register