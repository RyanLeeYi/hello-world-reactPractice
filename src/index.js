import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './SPADemo/App';
import Progress from './Progress';
import App2 from './propsDemo/App2';
import App3 from './childrenDemo/App3';
import App4 from './componentDemo/App4';
import App5 from './useStateDemo/useStateDemo';
import App6 from './fetchAPIDemo/App6';
import reportWebVitals from './reportWebVitals';
import Baby from './componentLiveCircleDemo/Baby';
import App7 from './componentWillUnmountDemo/App7';
import App8 from './useEffectDemo/App8';
import Parent from './parentInteractiveWithChildren/Parent';
import LoginForm from './InputInteractiveWithState/LoginForm';
import LoginFormSelect from './InputInteractiveWithState/LoginFormSelect';
import LoginFormRadioButton from './InputInteractiveWithState/LoginFormRadioButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

const multipleButton = () => {
  var output = [];
  for (let i = 0; i < 4; i++) {
    output.push(<button>我是第{i}個按鈕</button>)
  }
  return output;
}

//#region 使用變數設定css
const styleArgument = { fontSize: '100px', color: 'red' };

const testFunction = () => {
  return (
    <div>
      <button>大家好</button>
      <h1 style={styleArgument} > 我不好 </h1>
    </div>
  );
}
//#endregion

//#region 使用函式範例
const onclickFunction = () => {
  return (
    <div>
      <button value={true} onClick={getValue}>按下以取得數值 </button>
    </div>
  );
}
const getValue = (event) => {
  console.log(event.target.value);
}
//箭頭函式
const onclickFunction2 = () => {
  return (
    <div>
      <Progress />
      <button value={true} onClick={(e) => { getValue2(e.target.value) }}>按下以取得數值 </button>
    </div>
  );
}
const getValue2 = (value) => {
  console.log(value);
}
//#endregion

//#region 綁定函式到參數中並使用
const printMessage = () => {
  document.getElementById('show-area').innerHTML = "我被按到了";
}
const bindingFunction = () => {
  return (
    <div>
      <App2 name="我的名字" handleClick={printMessage} />
      <div id="show-area"></div>
    </div>
  );
}
//#endregion

//#region 使用children參數
const bindingChildren = () => {
  return (
    <App3> 在index.js中設定文字 </App3>
  );
}
//#endregion

root.render(
  <div>
    <LoginForm />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
