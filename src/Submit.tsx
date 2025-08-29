import './Submit.css'

function Submit({ handle }:{handle:() => void}) {
  return (
    <div className="center">
      <input type="submit"  id="submit" value="登録する" onClick={handle} />
    </div>
  );
};

export default Submit