import { useSelector } from 'react-redux';

function DarkStatus() {
  const dark = useSelector((store) => store.dark.value);

  let style = {};
  let lightStatus = 'on';
  if (dark) {
    lightStatus = 'off';
    style = { 'color': 'white' }
  };

  return (
    <div>
      <p style={style}>Light is {lightStatus}</p>
    </div>
  );
}

export default DarkStatus;
